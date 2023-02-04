export const getDewPoint = (temperature: number, humidity: number): string => {
  const value = temperature - ((100 - humidity) / 5);

  return value.toFixed(0) + "°C";
};
