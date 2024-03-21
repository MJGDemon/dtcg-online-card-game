import { Observer } from "./Observer";
import { DigimonCard, DigimonEggCard } from "./card";

export interface Digimon extends Observer {
  DP: number;
  Lv: number;
  playCost: () => number | number;
  digivolveCost: () => number | number;
  digiOrigin?: DigimonCard[] | DigimonEggCard[];
  buffs: any[];
}
