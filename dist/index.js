"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const books_route_1 = require("./books/books.route");
const cors_1 = require("hono/cors");
const app = new hono_1.Hono();
app.use('*', (0, cors_1.cors)({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods if needed
    allowHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'], // Add other headers if needed
    credentials: true // If you need to allow cookies or other credentials
}));
app.route('/api', books_route_1.booksRoute);
const port = 3000;
console.log(`Server is running on port ${port}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port
});
