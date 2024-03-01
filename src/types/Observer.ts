import { Event } from "./event";

export interface Observer {
  update: (event: Event) => void;
}
