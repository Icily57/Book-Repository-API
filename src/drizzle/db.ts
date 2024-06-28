// import "dotenv/config";
// import {drizzle} from "drizzle-orm/node-postgres";
// import * as schema from "./schema";
// import {Client} from "pg"

// export const client = new Client({
//     connectionString: process.env.DATABASE_URL as string, 
// })

// const main = async () => {
//     await client.connect(); 
// }
// main();

// const db = drizzle(client, {schema});

// export default db;
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";

config({ path: ".env" });

const client = neon(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema, logger: true }); // create a drizzle instance

export default db;