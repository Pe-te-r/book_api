"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOneBook = exports.updateBook = exports.createBook = exports.deleteBook = exports.fetchAllBooks = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const fetchAllBooks = async () => {
    const books = await db_1.default.query.booksDetailsTable.findMany();
    return books;
};
exports.fetchAllBooks = fetchAllBooks;
const deleteBook = async (id) => {
    await db_1.default.delete(schema_1.booksDetailsTable).where((0, drizzle_orm_1.eq)(schema_1.booksDetailsTable.id, id));
    return "Book deleted";
};
exports.deleteBook = deleteBook;
const createBook = async (book) => {
    try {
        await db_1.default.insert(schema_1.booksDetailsTable).values(book);
        return "Book created";
    }
    catch (error) {
        return "error creating book";
    }
};
exports.createBook = createBook;
const updateBook = async (book) => {
    try {
        await db_1.default.update(schema_1.booksDetailsTable).set(book).where((0, drizzle_orm_1.eq)(schema_1.booksDetailsTable.id, book.id));
        return "Book updated";
    }
    catch (error) {
        return "error updating";
    }
};
exports.updateBook = updateBook;
const fetchOneBook = async (id) => {
    const book = await db_1.default.query.booksDetailsTable.findFirst({
        where: (books, { eq }) => eq(books.id, id)
    });
    return book;
};
exports.fetchOneBook = fetchOneBook;
