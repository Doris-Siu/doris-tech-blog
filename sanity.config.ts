import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { getDefaultDocumentNode } from "./structure";
// import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

// const devOnlyPlugins = [getStartedPlugin()]

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Doris_Content_Studio",
  title: "Doris_Content_Studio",
  projectId,
  dataset,

  // plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
