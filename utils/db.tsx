import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./Schema";

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_KEY!);

export const db = drizzle(sql, { schema });
