import { Context } from "hono";
import { createBook, deleteBook, fetchAllBooks, fetchOneBook, updateBook } from "./books.services";

export const getAllBooksControl=async(c: Context)=>{
    try{
        const allBooks = await fetchAllBooks()
        return c.json(allBooks,200)
    }catch(error){
        return c.json("error fetching books",400)
    }
}
export const updateBookControl=async(c: Context)=>{
    try{
        const book= await c.req.json()
        if(fetchOneBook(Number(book.id))!== undefined){
            const result = await updateBook(book)
            return c.json(result,201)
        }else{
            return c.json("book not found",404)
        }
    }catch(error: any){
        return c.json("book not found",404)
    }
}
export const deleteBookControl=async(c: Context)=>{
    try{
        const id =c.req.param('id')
        if(await fetchOneBook(Number(id))!= undefined){
            const result = await deleteBook(Number(id))
            return c.json(result,200)
        }else{
            return c.json("book not found",404)
        }
    }catch(error:any){
        return c.json("error deleting book",400)
    }
}
export const createBookControl=async(c: Context)=>{
    try{
        const book= await c.req.json()
        const result = await createBook(book)
        return c.json(result,201)
    }catch(error: any){
        return c.json("error creating book",400)
    }
}

export const getBook = async(c: Context)=>{
    const id =c.req.param('id')
    try{
        if(Number(id) ){
            const result = await fetchOneBook(Number(id))
            return c.json(result,200)
        }else{
            return c.json("Invalid id",400)
        }
    }catch(error: any){
        return c.json("error fetching book",500)
    }
}
