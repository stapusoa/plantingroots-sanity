import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"

export default defineConfig({
  name: "default",
  title: "plantingroots-sanity",

  projectId: "ocwcthde",
  dataset: process.env.SANITY_STUDIO_DATASET || "production", // ← allow dynamic dataset

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})