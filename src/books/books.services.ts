import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { BookInsert, BookSelect, booksDetailsTable } from "../drizzle/schema";

export const fetchAllBooks=async(): Promise<BookSelect[]>=>{
    const books=await db.query.booksDetailsTable.findMany()
    return books;
}

export const deleteBook=async(id: number): Promise<string>=>{
    await db.delete(booksDetailsTable).where(eq(booksDetailsTable.id, id));
    return "Book deleted"
}

export const createBook=async(book: BookInsert): Promise<string>=>{
    try {
        await db.insert(booksDetailsTable).values(book)
        return "Book created"
    } catch (error: any) {
        return "error creating book"
    }
}

export const updateBook=async(book: BookInsert): Promise<string>=>{
    try{

        await db.update(booksDetailsTable).set(book).where(eq(booksDetailsTable.id, book.id))
        return "Book updated"
    }catch (error: any) {
        return "error updating"
    }
}

export const fetchOneBook = async (id: number): Promise<BookSelect | undefined> => {
    const book = await db.query.booksDetailsTable.findFirst({
        where: (books, { eq }) => eq(books.id, id)
      })
    
      return book
  }