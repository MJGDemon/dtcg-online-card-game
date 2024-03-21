import { Digimon } from "@/types/digimon";
import useEventBus from "@/hooks/useSubscribe";
import { EventEnum } from "@/types/event";

const mainTest = () => {
  const { subscribe, notify } = useEventBus();

  const testDigimon: Digimon = {
    DP: 0,
    Lv: 0,
    playCost: () => 0,
    digivolveCost: () => 0,
    update: (event) => {
      console.log(event);
    },
    buffs: [],
  };

  subscribe(testDigimon);

  notify({
    isMyTurn: true,
    type: EventEnum.TurnStart,
    origin: "system",
  });

  notify({
    isMyTurn: true,
    type: EventEnum.ActiveStageStart,
    origin: "system",
  });

  notify({
    isMyTurn: true,
    type: EventEnum.ActiveStageEnd,
    origin: "system",
  });
};

export default mainTest;
