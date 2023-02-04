import { windDirectionCode } from "@/types/OpenWeatherApi";

const defineCheck = (value: number) => (moreThan: number, lessThan: number) => {
  const isMore = value > moreThan;
  const isLessOrEquals = value <= lessThan;

  if (moreThan > lessThan) return isMore || isLessOrEquals;

  return isMore && isLessOrEquals;
};

export const getWindDirection = (degrees: number): windDirectionCode => {
  const check = defineCheck(degrees);

  if (check(348, 11)) return "N";
  if (check(11, 33)) return "NNE";
  if (check(33, 56)) return "NE";
  if (check(56, 78)) return "ENE";
  if (check(78, 101)) return "E";
  if (check(101, 123)) return "ESE";
  if (check(123, 146)) return "SE";
  if (check(146, 168)) return "SSE";
  if (check(168, 191)) return "S";
  if (check(191, 213)) return "SSW";
  if (check(213, 236)) return "SW";
  if (check(236, 258)) return "WSW";
  if (check(258, 281)) return "W";
  if (check(281, 303)) return "WNW";
  if (check(303, 326)) return "NW";
  return "NNW";
};
