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
    gps: v.object({             // Coordonnées GPS
      lat: v.number(),              // Position GPS (latitude)
      lng: v.number(),              // Position GPS (longitude)
    }),
    searchText: v.string(), 
  })
    .index("by_region", ["region"])
    .index("by_theme", ["theme"])
    .index("by_search", ["searchText"]),


  boutiques: defineTable({
    name: v.string(),              // Nom de la boutique
    typeProduit: v.string(),       // Type produit (textile, sculpture…)
    description: v.string(),       // Description rapide
    horaires: v.string(),          // Horaires d’ouverture
    photo: v.string(),             // URL photo principale        
    gps: v.object({
      lat: v.number(),// Position GPS (latitude)
      lng: v.number(),// Position GPS (longitude)
    }),
    searchText: v.string(), 

    // Relation simple(pour l'instant ) : rattacher une boutique à un site précis (optionnel)
    /**
     * TODO: gérer la proximité par GPS pour  un calcul dynamique
     */
    siteId: v.optional(v.id("sites")),
  })
    .index("by_type", ["typeProduit"])
    .index("by_site", ["siteId"]),
});
