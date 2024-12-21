export function registResolvers(resolverClasses: any[]) {
  const resolvers: any = {
    Query: {},
    Mutation: {},
  };

  try {
    resolverClasses.forEach((resolver) => {
      const resolverInstance = new resolver();

      resolver.queries.forEach((methodName: any) => {
        resolvers.Query[methodName] =
          resolverInstance[methodName].bind(resolverInstance);
      });

      resolver.mutations.forEach((methodName: any) => {
        resolvers.Mutation[methodName] =
          resolverInstance[methodName].bind(resolverInstance);
      });
    });
  } catch (error) {
    throw new Error("Error in registResolvers: " + error);
  }

  return resolvers;
}
