export default function Query() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (!target.constructor.queries) {
      target.constructor.queries = [];
    }
    target.constructor.queries.push(propertyKey);
  };
}
