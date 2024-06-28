import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import { bookRouter } from './Route/book.route'


const app = new Hono()

//default route
app.get('/', (c) => {
  return c.text('The server is running📢😏😏😏!')
})

//custom route
app.route ("/api",bookRouter)

console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})