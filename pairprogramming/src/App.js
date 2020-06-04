import React from 'react';
import logo from './logo.svg';
import './App.css';
import Warnings from './components/WarningSign';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar';
import MyBadge from './components/MyBadge';

function App() {
  return (
    <div className="App">
     
        <NavBar title="Strive Books"/>
        <Warnings />
        <MyBadge />
     
    </div>
  );
}

export default App;
