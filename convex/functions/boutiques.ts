import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/*
 * Query: toutes les boutiques
 */
export const getBoutiques = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("boutiques").collect();
  },
});

/*
 * Query: boutiques liées à un site (siteId est un Id de la table 'sites')
 */
export const getBoutiquesBySite = query({
  args: { siteId: v.id("sites") },
  handler: async (ctx, { siteId }) => {
    return await ctx.db
      .query("boutiques")
      .filter((q) => q.eq(q.field("siteId"), siteId))
      .collect();
  },
});

/*
 * Query: recherche simple sur boutiques (name ou typeProduit)
 */
export const searchBoutiques = query({
  args: { term: v.string() },
  handler: async (ctx, { term }) => {
    return await ctx.db
      .query("boutiques")
      .filter((q) =>
        q.or(
          q.eq(q.field("name"), term),
          q.eq(q.field("typeProduit"), term)
        )
      )
      .collect();
  },
});

/*
 * Mutation: créer une boutique (optionnellement liée à un site)
 */
export const createBoutique = mutation({
  args: {
    name: v.string(),
    typeProduit: v.string(),
    description: v.string(),
    horaires: v.optional(v.string()),
    photo: v.optional(v.string()),
    gps: v.object({ lat: v.number(), lng: v.number() }),
    siteId: v.optional(v.id("sites")), // relation optionnelle
  },
  handler: async (ctx, args) => {
    const searchText = `${args.name} ${args.typeProduit}`.toLowerCase();
    const id = await ctx.db.insert("boutiques", {
      ...args,
      photo: args.photo ?? "",
      horaires: args.horaires ?? "",
      searchText,
    });
    return id;
  },
});

/*
 * Mutation: mise à jour partielle d'une boutique
 */
export const updateBoutique = mutation({
  args: {
    id: v.id("boutiques"),
    name: v.optional(v.string()),
    typeProduit: v.optional(v.string()),
    description: v.optional(v.string()),
    horaires: v.optional(v.string()),
    photo: v.optional(v.string()),
    gps: v.optional(v.object({ lat: v.number(), lng: v.number() })),
    siteId: v.optional(v.id("sites")),
  },
  handler: async (ctx, args) => {
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
 * Mutation: supprimer une boutique
 */
export const deleteBoutique = mutation({
  args: { id: v.id("boutiques") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return { ok: true };
  },
});
