"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRoute = void 0;
const hono_1 = require("hono");
const books_control_1 = require("./books.control");
exports.booksRoute = new hono_1.Hono();
exports.booksRoute.get('/books', books_control_1.getAllBooksControl);
exports.booksRoute.post('/books', books_control_1.createBookControl);
exports.booksRoute.put('/books', books_control_1.updateBookControl);
exports.booksRoute.delete('/books/:id', books_control_1.deleteBookControl);
