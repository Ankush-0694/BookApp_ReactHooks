import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookDetails({book}){

    const { title, author } = book;
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={()=>dispatch({type: 'REMOVE_BOOK', id: book.id})} >
            <div className="title">{title}</div>
            <div className="author">{author}</div>
        </li>      
    )
}

export default BookDetails;