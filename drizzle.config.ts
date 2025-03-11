/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/Schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_KEY,
  },
};

