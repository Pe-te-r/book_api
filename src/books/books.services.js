import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { booksDetailsTable } from "../drizzle/schema";
export const fetchAllBooks = async () => {
    const books = await db.query.booksDetailsTable.findMany();
    return books;
};
export const deleteBook = async (id) => {
    await db.delete(booksDetailsTable).where(eq(booksDetailsTable.id, id));
    return "Book deleted";
};
export const createBook = async (book) => {
    try {
        await db.insert(booksDetailsTable).values(book);
        return "Book created";
    }
    catch (error) {
        return "error creating book";
    }
};
export const updateBook = async (book) => {
    try {
        await db.update(booksDetailsTable).set(book).where(eq(booksDetailsTable.id, book.id));
        return "Book updated";
    }
    catch (error) {
        return "error updating";
    }
};
export const fetchOneBook = async (id) => {
    const book = await db.query.booksDetailsTable.findFirst({
        where: (books, { eq }) => eq(books.id, id)
    });
    return book;
};
