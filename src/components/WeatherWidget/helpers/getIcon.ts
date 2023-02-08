import { WeatherInfoIcon } from "@/types/OpenWeatherApi";

export const getIcon = (icon: WeatherInfoIcon) => "open-weather-icon-" + icon;
