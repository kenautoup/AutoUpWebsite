import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/sitemap.xml", (_req, res) => {
    const baseUrl = "https://autoup.io";
    const today = new Date().toISOString().split("T")[0];

    const blogSlugs = [
      "cold-email-deliverability-2025",
      "b2b-lead-generation-ai",
      "outbound-vs-inbound-sales",
      "linkedin-outreach-playbook",
      "email-copywriting-frameworks",
      "scaling-outreach-without-spam",
    ];

    const urls = [
      { loc: `${baseUrl}/`, changefreq: "weekly", priority: "1.0" },
      { loc: `${baseUrl}/blog`, changefreq: "weekly", priority: "0.8" },
      ...blogSlugs.map((slug) => ({
        loc: `${baseUrl}/blog/${slug}`,
        changefreq: "monthly" as const,
        priority: "0.7",
      })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  return httpServer;
}
