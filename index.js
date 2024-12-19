const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server");
const schema = fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8");
const typeDefs = gql(schema);
const resolvers = {
  Query: {
    thread: (_, params) => {
      console.log(params, "params");
      return { name: params.id + "params" };
    },
    threads: () => {},
  },
  Mutation: {
    createThread: () => {},
    createComment: () => {},
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
