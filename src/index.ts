import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { booksRoute } from './books/books.route'

const app = new Hono()

app.route('/api',booksRoute)


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
