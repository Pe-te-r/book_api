import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { booksRoute } from './books/books.route';
import { cors } from 'hono/cors';
const app = new Hono();
app.use('*', cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods if needed
    allowHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'], // Add other headers if needed
    credentials: true // If you need to allow cookies or other credentials
}));
app.route('/api', booksRoute);
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port
});
