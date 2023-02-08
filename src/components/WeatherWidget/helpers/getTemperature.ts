const celsium = "°C";

export const getTemperature = (temperature: number): string => {
  let result: string;
  result = temperature.toFixed(0) + celsium;

  if (temperature > 0) result = `+${result}`;

  return result;
}
