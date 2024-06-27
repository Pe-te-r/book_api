"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBook = exports.createBookControl = exports.deleteBookControl = exports.updateBookControl = exports.getAllBooksControl = void 0;
const books_services_1 = require("./books.services");
const getAllBooksControl = async (c) => {
    try {
        const allBooks = await (0, books_services_1.fetchAllBooks)();
        return c.json(allBooks, 200);
    }
    catch (error) {
        return c.json("error fetching books", 400);
    }
};
exports.getAllBooksControl = getAllBooksControl;
const updateBookControl = async (c) => {
    try {
        const book = await c.req.json();
        if ((0, books_services_1.fetchOneBook)(Number(book.id)) !== undefined) {
            const result = await (0, books_services_1.updateBook)(book);
            return c.json(result, 201);
        }
        else {
            return c.json("book not found", 404);
        }
    }
    catch (error) {
        return c.json("book not found", 404);
    }
};
exports.updateBookControl = updateBookControl;
const deleteBookControl = async (c) => {
    try {
        const id = c.req.param('id');
        if (await (0, books_services_1.fetchOneBook)(Number(id)) != undefined) {
            const result = await (0, books_services_1.deleteBook)(Number(id));
            return c.json(result, 200);
        }
        else {
            return c.json("book not found", 404);
        }
    }
    catch (error) {
        return c.json("error deleting book", 400);
    }
};
exports.deleteBookControl = deleteBookControl;
const createBookControl = async (c) => {
    try {
        const book = await c.req.json();
        const result = await (0, books_services_1.createBook)(book);
        return c.json(result, 201);
    }
    catch (error) {
        return c.json("error creating book", 400);
    }
};
exports.createBookControl = createBookControl;
const getBook = async (c) => {
    const id = c.req.param('id');
    try {
        if (Number(id)) {
            const result = await (0, books_services_1.fetchOneBook)(Number(id));
            return c.json(result, 200);
        }
        else {
            return c.json("Invalid id", 400);
        }
    }
    catch (error) {
        return c.json("error fetching book", 500);
    }
};
exports.getBook = getBook;
