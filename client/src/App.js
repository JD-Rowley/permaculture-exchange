import React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Login />
        <About />
      </main>
    </div>
  );
}

export default App;
