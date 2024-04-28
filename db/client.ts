import { drizzle } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite/next"

const expoDb = openDatabaseSync("split.db")

export const db = drizzle(expoDb)
