import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookConextProvider from './contexts/BookContext'

function App() {
  return (
    <div className="App">
      <BookConextProvider>
        <Navbar/>
        <BookList />
        <BookForm/>
      </BookConextProvider>
    </div>
  );
}

export default App;