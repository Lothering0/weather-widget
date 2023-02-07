interface Condition<description extends string, icon extends string> {
  description: description;
  icon: icon;
}

export interface WeatherInfoConditions {
  Thunderstorm: {
    200: Condition<"thunderstorm with light rain", "11d">;
    201: Condition<"thunderstorm with rain", "11d">,
    202: Condition<"thunderstorm with heavy rain", "11d">;
    210: Condition<"light thunderstorm", "11d">;
    211: Condition<"thunderstorm", "11d">;
    212: Condition<"heavy thunderstorm", "11d">;
    221: Condition<"ragged thunderstorm", "11d">;
    230: Condition<"thunderstorm with light drizzle", "11d">;
    231: Condition<"thunderstorm with drizzle", "11d">;
    232: Condition<"thunderstorm with heavy drizzle", "11d">;
  };
  Drizzle: {
    300: Condition<"light intensity drizzle", "09d">;
    301: Condition<"drizzle", "09d">;
    302: Condition<"heavy intensity drizzle", "09d">;
    310: Condition<"light intensity drizzle rain", "09d">;
    311: Condition<"drizzle rain", "09d">;
    312: Condition<"heavy intensity drizzle rain", "09d">;
    313: Condition<"shower rain and drizzle", "09d">;
    314: Condition<"heavy shower rain and drizzle", "09d">;
    321: Condition<"shower drizzle", "09d ">;
  };
  Rain: {
    500: Condition<"light rain", "10d">;
    501: Condition<"moderate rain", "10d">;
    502: Condition<"heavy intensity rain", "10d">;
    503: Condition<"very heavy rain", "10d">;
    504: Condition<"extreme rain", "10d">;
    511: Condition<"freezing rain", "13d">;
    520: Condition<"light intensity shower rain", "09d">;
    521: Condition<"shower rain", "09d">;
    522: Condition<"heavy intensity shower rain", "09d">;
    531: Condition<"ragged shower rain", "09d ">;
  };
  Snow: {
    600: Condition<"light snow", "13d">;
    601: Condition<"Snow", "13d">;
    602: Condition<"Heavy snow", "13d">;
    611: Condition<"Sleet", "13d">;
    612: Condition<"Light shower sleet", "13d">;
    613: Condition<"Shower sleet", "13d">;
    615: Condition<"Light rain and snow", "13d">;
    616: Condition<"Rain and snow", "13d">;
    620: Condition<"Light shower snow", "13d">;
    621: Condition<"Shower snow", "13d">;
    622: Condition<"Heavy shower snow", "13d">;
  };
  Mist: {
    701: Condition<"mist", "50d">;
  };
  Smoke: {
    711: Condition<"Smoke", "50d">;
  };
  Haze: {
    721: Condition<"Haze", "50d">;
  };
  Dust: {
    731: Condition<"sand / dust whirls", "50d">;
    761: Condition<"dust", "50d">;
  };
  Fog: {
    741: Condition<"fog", "50d">;
  };
  Sand: {
    751: Condition<"sand", "50d">;
  };
  Ash: {
    762: Condition<"volcanic ash", "50d">;
  };
  Squall: {
    771: Condition<"squalls", "50d">;
  };
  Tornado: {
    781: Condition<"tornado", "50d">;
  };
  Clear: {
    800: Condition<"clear sky", "01d" | "01n">;
  };
  Clouds: {
    801: Condition<"few clouds: 11 - 25 %", "02d" | "02n">;
    802: Condition<"scattered clouds: 25 - 50 %", "03d" | "03n">;
    803: Condition<"broken clouds: 51 - 84 %", "04d" | "04n">;
    804: Condition<"overcast clouds: 85 - 100 %", "04d">;
  };
}
