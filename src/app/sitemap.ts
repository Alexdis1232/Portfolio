import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE_URL = "https://portfolio-mu-sepia-70.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
    }));

  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/cv`, lastModified: new Date() },
    ...projectRoutes,
  ];
}
