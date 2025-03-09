import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/dashboard`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/dashboard/billing`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/dashboard/setting`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/dashboard/history`,
      lastModified: new Date().toISOString(),
    },
  ];
}
