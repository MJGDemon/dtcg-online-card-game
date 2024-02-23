import useGame from "@/hooks/useGame";
import { Card } from "@/types/card";

const initGame = () => {
  const { gameStateRef, drawCard } = useGame();
  const card: Card = {
    id: "BT1-009",
    cardType: "digimon",
    name: "单角龙兽",
    imgUrl:
      "https://dtcg-wechat.moecard.cn/img/card/122_173.M93en9vtVVZ.png~card.jpg",
    color: ["Red"],
    illustrator: "123213",
  };

  gameStateRef.myDeck.value.push(...[card, card, card, card, card, card, card]);

  drawCard(5);
};

export default initGame;
