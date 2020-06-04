import React from 'react';
import logo from './logo.svg';
import './App.css';
import Warnings from './components/WarningSign';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList'

function App() {
  return (
    <div className="App">
     
        <NavBar title="Strive Books"/>
        <Warnings />
        
        
        <SingleBook />
        <hr />
        <BookList />
     
    </div>
  );
}

export default App;
