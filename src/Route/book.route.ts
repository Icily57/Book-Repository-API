import { Hono } from 'hono';
import { addBook, deleteBook, getBookById, getBooks, updateBook } from '../Controller/book.controller';

export const bookRouter = new Hono();

bookRouter.get('/books', getBooks);
bookRouter.get('/book/:id', getBookById);
bookRouter.post('/book', addBook);
bookRouter.put('/book/:id', updateBook);
bookRouter.delete('/book/:id', deleteBook);


