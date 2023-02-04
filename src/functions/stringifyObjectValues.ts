export const stringifyObjectValues = (
  object: Record<string, any>
): Record<string, string> => {
  for (const key in object) {
    object[key] = object[key]?.toString() ?? object[key] + "";
  }

  return object;
};
