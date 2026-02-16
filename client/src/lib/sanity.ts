import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
if (!projectId) {
  console.warn("VITE_SANITY_PROJECT_ID is not set. Blog content will not load from Sanity.");
}

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
