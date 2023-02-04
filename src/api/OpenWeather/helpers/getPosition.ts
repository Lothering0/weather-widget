import { CitiesStore } from "@/store";
import { Coords, city } from "@/types/browserApi";
import { getCurrentCoords } from "../../browser";

export async function getPosition(): Promise<Coords[]>;
export async function getPosition(): Promise<city[]>;
export async function getPosition(): Promise<Coords[] | city[]> {
  const cities = CitiesStore.getCities();

  if (!cities) {
    const coords = await getCurrentCoords();
    return [coords];
  }

  return cities;
};