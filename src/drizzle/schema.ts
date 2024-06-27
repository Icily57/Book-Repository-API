import { pgTable, serial, text, integer, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

//user table
export const BooksTable = pgTable("books", {
    id: serial("id").primaryKey(),
    title: text("title"),
    author: text("author"),
    year: integer("year"),
})

export type TIBook = typeof BooksTable.$inferInsert;
export type TSBook = typeof BooksTable.$inferSelect;