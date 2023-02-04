export const compose = <T extends R = any, R = any>(
  ...functions: Function[]
) => (value: T): R => {
  return functions.reduceRight((previous, currentFunction) => {
    return currentFunction(previous);
  }, value);
};
