const express = require('express');
const path = require('path');
const db = require('./config/connection');
<<<<<<< HEAD
// const routes = require('./routes');
=======
>>>>>>> develop
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth')

const app = express();
const PORT = process.env.PORT || 3001;
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  })

  await server.start()

  server.applyMiddleware({ app })
  console.log(`GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

<<<<<<< HEAD
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })
=======
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
}) */
>>>>>>> develop

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
}); 

