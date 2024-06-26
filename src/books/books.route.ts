import { Hono } from "hono";
import { createBookControl, deleteBookControl, getAllBooksControl, updateBookControl } from "./books.control";


export const booksRoute=new Hono()

booksRoute.get('/books',getAllBooksControl)
booksRoute.post('/books',createBookControl)
booksRoute.put('/books',updateBookControl)
booksRoute.delete('/books/:id',deleteBookControl)