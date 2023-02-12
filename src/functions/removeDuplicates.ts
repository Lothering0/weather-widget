export const removeDuplicates = <T = any>(array: T[]): T[] => {
  return [...new Set(array)];
};
