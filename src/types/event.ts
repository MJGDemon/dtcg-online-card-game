import { Digimon } from "./digimon";
import { Option } from "./option";
import { Tamer } from "./tamer";

export enum EventEnum {
  TurnStart = "TurnStart",
  ActiveStageStart = "ActiveStageStart",
  ActiveStageEnd = "ActiveStageEnd",
  DrawStageStart = "DrawStageStart",
  DrawStageEnd = "DrawStageEnd",
  SpawnStageStart = "SpawnStageStart",
  SpawnStageEnd = "SpawnStageEnd",
  MainStageStart = "MainStageStart",
  MainStageEnd = "MainStageEnd",
  EndStageStart = "EndStageStart",
  EndStageEnd = "EndStageEnd",

  MemoryChange = "MemoryChange",
  BeforePlay = "BeforePlay",
  Play = "Play",
  BeforeDigivolve = "BeforeDigivolve",
  Digivolve = "Digivolve",
  BeforeDeletion = "BeforeDeletion",
  Deletion = "Deletion",
  Attack = "Attack",
}

export interface Event {
  isMyTurn: boolean;
  type: EventEnum;
  origin: "system" | Digimon | Option | Tamer;
}
