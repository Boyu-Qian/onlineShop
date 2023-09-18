//A function that takes request,response and next.
//It is gonna resolve a promise, if it resolves then
//it is gonna call next (next piece of middleware)
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next).catch(next));
};
export default asyncHandler;
