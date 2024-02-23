export type Card = DigimonCard | OptionCard | TamerCard | DigimonEggCard;

interface CardInfo {
  id: string;
  cardType: "digimon" | "tamer" | "option" | "digimonEgg";
  name: string;
  imgUrl: string;
  color: string[];
  attribute?: string;
  type?: string[];
  mainEffect?: string;
  inheritedEffect?: string;
  aceEffect?: string;
  burstDigivolve?: string;
  digiXros?: string;
  dnaDigivolve?: string;
  securityEffect?: string;
  illustrator: string;
}

export interface DigimonEggCard extends CardInfo {}

export interface DigimonCard extends CardInfo {
  playCost: number;
  digivolveCost?: number;
  dp: number;
}

export interface OptionCard extends CardInfo {
  playCost: number;
}

export interface TamerCard extends CardInfo {
  playCost: number;
}
