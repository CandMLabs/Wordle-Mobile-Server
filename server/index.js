const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const server = new ApolloServer({typeDefs, resolvers});

server.listen(3000).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 3000
  `);
});