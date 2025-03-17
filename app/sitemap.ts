import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-content-generator-sass-1m7q.vercel.app";

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
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/aboutus`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date().toISOString(),
    },
  ];
}
