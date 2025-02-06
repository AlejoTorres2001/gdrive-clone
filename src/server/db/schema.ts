/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { int, singlestoreTable, varchar } from "drizzle-orm/singlestore-core";
export const usersTable = singlestoreTable("users_table", {
  id: int().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
});
