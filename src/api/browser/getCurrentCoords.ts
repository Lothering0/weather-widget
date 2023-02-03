import { Coords } from "@/types/browserApi";

export const getCurrentCoords = (): Promise<Coords> => {
  return new Promise((resolve, reject) => {
    const onSuccess = (position: GeolocationPosition): void => {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    };
    const onError = (error: GeolocationPositionError): void => {
      reject(error);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 10 * 1000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  });
};