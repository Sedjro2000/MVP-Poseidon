import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sites: defineTable({
    name: v.string(),              // Nom du site touristique
    region: v.string(),            // Région / ville
    theme: v.string(),             // Thème (culturel, naturel, historique…)
    description: v.string(),       // Description du site
    photo: v.string(),             // URL photo principale
    horaires: v.string(),          // Horaires d’ouverture
    latitude: v.number(),          // Position GPS (latitude)
    longitude: v.number(),         // Position GPS (longitude)
  })
    .index("by_region", ["region"])
    .index("by_theme", ["theme"]),

  boutiques: defineTable({
    name: v.string(),              // Nom de la boutique
    typeProduit: v.string(),       // Type produit (textile, sculpture…)
    description: v.string(),       // Description rapide
    horaires: v.string(),          // Horaires d’ouverture
    photo: v.string(),             // URL photo principale
    latitude: v.number(),          // Position GPS (latitude)
    longitude: v.number(),         // Position GPS (longitude)

    // Relation simple : rattacher une boutique à un site précis (optionnel)
    siteId: v.optional(v.id("sites")),
  })
    .index("by_type", ["typeProduit"])
    .index("by_site", ["siteId"]),
});
