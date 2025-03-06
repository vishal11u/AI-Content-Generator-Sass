/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/Schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_LlCw70PQJZzA@ep-yellow-mud-a8oiwg7x-pooler.eastus2.azure.neon.tech/A--Content?sslmode=require",
  },
};

