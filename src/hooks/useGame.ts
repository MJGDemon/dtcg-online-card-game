import useGameStore from "@/store/gameStore";
import { toRefs } from "vue";

const useGame = () => {
  const { gameState, drawCard, setIsMyTurn, setMemoryValue } = useGameStore();

  const gameStateRef = toRefs(gameState);

  return {
    gameStateRef,
    drawCard,
    setIsMyTurn,
    setMemoryValue,
  };
};

export default useGame;
