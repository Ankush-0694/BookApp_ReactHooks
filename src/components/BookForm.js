import React,{ useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const [title , setTitle]= useState("");
    const [author , setAuthor]= useState("");
    const {dispatch} = useContext(BookContext);

    function handleSubmit(event){
        dispatch({type: 'ADD_BOOK', book:{
            title,author
        }})

        
        setTitle("");
        setAuthor("");
        event.preventDefault();
    }

        return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event)=>{setTitle(event.target.value)}} value={title} required />      
            <input type="text" onChange={(event)=>{setAuthor(event.target.value)}}  value={author}  required />
            <button type="submit">Submit</button>    
        </form>
    );
}
 
export default BookForm;