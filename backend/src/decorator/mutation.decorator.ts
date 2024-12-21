export default function Mutation() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (!target.constructor.mutations) {
      target.constructor.mutations = [];
    }
    target.constructor.mutations.push(propertyKey);
  };
}
