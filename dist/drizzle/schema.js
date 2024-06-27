"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksDetailsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.booksDetailsTable = (0, pg_core_1.pgTable)("booksDetails", {
    id: (0, pg_core_1.integer)("id").primaryKey(),
    title: (0, pg_core_1.varchar)("title"),
    author: (0, pg_core_1.varchar)("author"),
    year: (0, pg_core_1.varchar)("year")
});
