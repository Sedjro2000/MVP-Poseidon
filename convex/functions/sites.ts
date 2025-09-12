import { query, mutation } from "../_generated/server";
import { v } from "convex/values";


/*
 * Query: recup all sites
 */

export const getAllSites = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("sites").collect();
  },
});

/*
 * Query: recherche simple par terme (égalité sur name/region/theme)
 * Note: pour une recherche texte plus flexible, voir la partie "bonnes pratiques" plus bas.
 */
export const searchSites = query({
  args: { term: v.string() }, // on attend un string 'term' (validé automatiquement)
  handler: async (ctx, { term }) => {
    // On filtre la table sites : si name == term OR region == term OR theme == term
    // q représente le "query builder" interne, avec des opérateurs (eq, or, field, ...)
    return await ctx.db
      .query("sites")
      .filter((q) =>
        q.or(
          q.eq(q.field("name"), term),
          q.eq(q.field("region"), term),
          q.eq(q.field("theme"), term)
        )
      )
      .collect();
  },
});

/*
 * Mutation
 */
export const createSite = mutation({
  args: {
    name: v.string(),
    region: v.string(),
    theme: v.string(),
    description: v.string(),
    photo: v.optional(v.string()),           
    horaires: v.optional(v.string()),        
    gps: v.object({ lat: v.number(), lng: v.number() }),
  },
  handler: async (ctx, args) => {
    const searchText =
      `${args.name} ${args.region} ${args.theme}`.toLowerCase();
    
    const id = await ctx.db.insert("sites", {
      ...args,
      photo: args.photo ?? "",
      horaires: args.horaires ?? "",
      searchText,
    });
    return id ;
  },
});

/*
 * Mutation: mise à jour partielle d'un site
 */
export const updateSite = mutation({
  args: {
    id: v.id("sites"), 
    name: v.optional(v.string()),
    region: v.optional(v.string()),
    theme: v.optional(v.string()),
    description: v.optional(v.string()),
    photo: v.optional(v.string()),
    horaires: v.optional(v.string()),
    gps: v.optional(v.object({ lat: v.number(), lng: v.number() })),
  },
  handler: async (ctx, args) => {
    // Construire un objet 'patch' ne contenant que les champs fournis
    const { id, ...maybe } = args;
    const patch: Record<string, any> = {};
    for (const [k, v] of Object.entries(maybe)) {
      if (v !== undefined) patch[k] = v;
    }

    await ctx.db.patch(id, patch);

    return await ctx.db.get(id);
  },
});

/*
 * Mutation: supprimer un site (attention aux boutiques liées -> gérer cascade/consistance)
 */
export const deleteSite = mutation({
  args: { id: v.id("sites") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return { ok: true };
  },
});
