import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "autoup-blog",
  title: "AutoUp Blog",
  projectId: process.env.SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
