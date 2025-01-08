import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "src/db/migrations" });
    console.log("Database migrated successfully");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main();

// export async function migrate() {
//     await db.runMigrations()
// }
