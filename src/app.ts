import { Hono } from 'hono';
import { bookRoutes } from './Route/book.route';

const app = new Hono();

app.route('/api/books', bookRoutes);

export { app };
