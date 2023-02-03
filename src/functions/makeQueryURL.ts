export const makeQueryURL = (data: Record<string, string>): string => {
  return new URLSearchParams(data).toString();
};