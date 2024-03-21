// 滚球兽

import { CardTypeEnum, DigimonEggCard } from "@/types/card";

const koromon: DigimonEggCard = {
  id: "ST-001",
  cardType: CardTypeEnum.digimonEgg,
  name: "滚球兽",
  imgUrl:
    "https://dtcg-pics.moecard.cn/img/card/11_67.MA5tjjNazRQ.png~thumb.jpg",
  color: ["red"],
  type: ["Lesser"],
  inheritedEffect: (thisDigimon) => {
    thisDigimon.buffs.push(() => {
      thisDigimon.DP += 1000;
    });
  },
  illustrator: "T神",
};

export default koromon;
