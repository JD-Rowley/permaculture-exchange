import React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import About from './components/About';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


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
