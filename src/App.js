import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import About from './components/About';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookConextProvider from './contexts/BookContext'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BookConextProvider>
          <Navbar/>
          <Route exact path='/' render={props =>
            <div>
              <BookList />
              <BookForm />
            </div>
          } />
          {/* <Route exact path='/' component={BookList}/> */}
          <Route path='/about' component={About}/>
            {/* <BookList /> */}
            {/* <BookForm/>    */}
                 
        </BookConextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;