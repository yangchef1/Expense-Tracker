import { ApolloServer } from "apollo-server";
import { connectDB } from "./db/db.config";
import { loadFiles } from "@graphql-tools/load-files";
import { expenseResolvers } from "./expense/resolver/expense.resolver";

async function startServer() {
  connectDB();

  const typeDefs = await loadFiles("./src/**/schema/*.graphql");

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query: expenseResolvers.Query,
      Mutation: expenseResolvers.Mutation,
    },
  });

  server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

startServer();
