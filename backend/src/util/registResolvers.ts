export function registResolvers(resolverClasses: any[]) {
  const resolvers: any = {
    Query: {},
    Mutation: {},
  };

  try {
    resolverClasses.forEach((resolver) => {
      resolver.queries.forEach((methodName: any) => {
        resolvers.Query[methodName] = new resolver()[methodName];
      });

      resolver.mutations.forEach((methodName: any) => {
        resolvers.Mutation[methodName] = new resolver()[methodName];
      });
    });
  } catch (error) {
    throw new Error("Error in registResolvers: " + error);
  }

  return resolvers;
}
