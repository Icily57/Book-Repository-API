import { Hono } from 'hono';
import { bookRouter } from './Route/book.route';

const app = new Hono();

app.route('/api/books', bookRouter);

export { app };
