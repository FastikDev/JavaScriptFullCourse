// put your code here
export function bind(func, context, ...args) {
  return function (...moreArgs) {
    return func.apply(context, [...args, ...moreArgs]);
  };
}
