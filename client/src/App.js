import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import Trade from './pages/Trade';
import TradePost from './pages/TradePost';
import NoMatch from './pages/NoMatch';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/profile/:username?' component={Profile} />
            <Route exact path='/trade' component={Trade} />
            <Route exact path='/trade/:id' component={TradePost} />

            <Route component={NoMatch} /> 
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
