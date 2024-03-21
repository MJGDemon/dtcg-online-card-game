import { defineStore } from "pinia";
import { reactive } from "vue";
import { Card } from "@/types/card";
import { Observer } from "@/types/Observer";

interface GameState {
  myInfo: {
    name: string;
  };
  opponentInfo: {
    name: string;
  };

  // 游戏内状态
  isMyTurn: boolean;
  globalEffect: any[];
  memoryValue: number;
  stage: "turnStart" | "activeStage" | "spawnStage" | "mainStage" | "endStage";
  myDeck: Card[];
  opponentDeck: Card[];
  myEggDeck: Card[];
  opponentEggDeck: Card[];
  myHands: Card[];
  opponentHands: Card[];

  obServerList: Observer[];
}

const gameStore = defineStore("game", () => {
  const gameState = reactive<GameState>({
    globalEffect: [],
    isMyTurn: false,
    memoryValue: 0,
    stage: "activeStage",
    myInfo: {
      name: "",
    },
    opponentInfo: {
      name: "",
    },
    myDeck: [],
    opponentDeck: [],
    myEggDeck: [],
    opponentEggDeck: [],
    myHands: [],
    opponentHands: [],
    obServerList: [],
  });

  const setIsMyTurn = (value: boolean) => {
    gameState.isMyTurn = value;
  };

  const setMemoryValue = (value: number) => {
    gameState.memoryValue = value;
  };

  const drawCard = (num: number) => {
    while (num--) {
      if (gameState.myDeck.length > 0) {
        const card = gameState.myDeck[0];
        gameState.myDeck.shift();
        gameState.myHands.push(card);
        console.log("drawCard", 1);
      }
    }
  };

  const pass = () => {
    gameState.memoryValue = -3;
  };

  return {
    gameState,
    setIsMyTurn,
    setMemoryValue,
    drawCard,
    pass,
  };
});

export default gameStore;
