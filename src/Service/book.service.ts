import  db  from '../drizzle/db';
import {eq} from 'drizzle-orm';
import { TIBook,TSBook,BooksTable } from '../drizzle/schema';

export const bookService= async (limit?: number): Promise<TSBook[] | null> => {
    if (limit) {
        return await db.query.BooksTable.findMany({
            limit: limit
        });
    }
    return await db.query.BooksTable.findMany();
}

export const getbookService = async (id: number): Promise<TIBook | undefined> => {
    return await db.query.BooksTable.findFirst({
        where: eq(BooksTable.id, id)
    })
}

export const addbookService = async (user: TIBook) => {
    await db.insert(BooksTable).values(user)
    return "Book added successfully";
}

export const updatebookService = async (id: number, user: TIBook) => {
    await db.update(BooksTable).set(user).where(eq(BooksTable.id, id))
    return "Book updated successfully";
}

export const deletebookService = async (id: number) => {
    await db.delete(BooksTable).where(eq(BooksTable.id, id))
    return "Book deleted successfully";
}