import { CssUnit } from "@/types/common"

export const makeCssValue = (value: number, units: CssUnit) => {
  return `${value}${units}`;
};
