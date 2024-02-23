export interface Digimon {
  DP: number;
  Lv: number;
  playCost: () => number | number;
  digivolveCost: () => number | number;
}
