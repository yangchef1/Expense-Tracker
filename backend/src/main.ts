import { ApolloServer } from "apollo-server";
import { connectDb } from "./db/db.connect";
import { loadFiles } from "@graphql-tools/load-files";
import { ExpenseResolver } from "./expense/resolver/expense.resolver";
import { registResolvers } from "./util/registResolvers";

async function startServer() {
  connectDb();

  const typeDefs = await loadFiles("./src/**/schema/*.graphql");
  const resolvers = registResolvers([ExpenseResolver]);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

startServer();
