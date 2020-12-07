import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

import {Link} from "react-router-dom";

const Navbar = () => {

    const {books} = useContext(BookContext);

    return (
    <div className="navbar">
        <h1>Ninja Reading List is here and</h1>
        <p>Currently you have {books.length} books to get through...</p>
        <div className="About">
            <Link to="/" style={{padding : "10px", color: "black" }} >Home</Link>
            <Link to="/about" style={{padding : "10px", color: "black" }} >About</Link>
        </div>
    </div>
    );
}
 
export default Navbar;