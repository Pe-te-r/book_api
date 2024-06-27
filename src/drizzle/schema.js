import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';
export const booksDetailsTable = pgTable("booksDetails", {
    id: integer("id").primaryKey(),
    title: varchar("title"),
    author: varchar("author"),
    year: varchar("year")
});
