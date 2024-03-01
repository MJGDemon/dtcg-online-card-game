import { Observer } from "./Observer";

export interface Digimon extends Observer {
  DP: number;
  Lv: number;
  playCost: () => number | number;
  digivolveCost: () => number | number;
}
