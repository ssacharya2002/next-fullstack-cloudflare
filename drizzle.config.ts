import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
    path: ".env.local",
})

export default {
    schema: "./app/db/schema.ts",
    out: "./migrations",
    //   driver: "turso",
    dialect: "turso",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_TOKEN!,
    },
} satisfies Config;


