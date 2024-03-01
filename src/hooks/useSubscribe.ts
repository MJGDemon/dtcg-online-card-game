import { Observer } from "@/types/Observer";
import { Event } from "@/types/event";
import useGame from "@/hooks/useGame";

const useSubscribe = () => {
  const { gameStateRef } = useGame();
  const subscribe = (observer: Observer) => {
    gameStateRef.obServerList.value.push(observer);
  };

  const notify = (event: Event) => {
    gameStateRef.obServerList.value.forEach((observer) => {
      observer.update(event);
    });
  };

  return {
    subscribe,
    notify,
  };
};

export default useSubscribe;
