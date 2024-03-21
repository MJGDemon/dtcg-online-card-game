import { Digimon } from "./digimon";

export type Card = DigimonCard | OptionCard | TamerCard | DigimonEggCard;

export enum CardTypeEnum {
  digimon = "digimon",
  tamer = "tamer",
  option = "option",
  digimonEgg = "digimonEgg",
}

interface CardInfo {
  id: string;
  cardType: CardTypeEnum;
  name: string;
  imgUrl: string;
  color: string[];
  attribute?: string;
  type?: string[];
  Attribute?: string[];
  mainEffect?: string;
  inheritedEffect?: (thisDigimon: Digimon) => void;
  securityEffect?: string;
  illustrator: string;
}

export interface DigimonEggCard extends CardInfo {}

export interface DigimonCard extends CardInfo {
  playCost: number;
  digivolveCost?: number;
  dp: number;
  digiXros?: string;
  aceEffect?: string;
  burstDigivolve?: string;
  dnaDigivolve?: string;
}

export interface OptionCard extends CardInfo {
  playCost: number;
}

export interface TamerCard extends CardInfo {
  playCost: number;
}
