export const getVisibility = (visibility: number): string => {
  return (visibility / 1000).toFixed(1) + "km";
};
