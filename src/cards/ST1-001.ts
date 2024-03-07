// 滚球兽

import { DigimonEggCard } from "@/types/card";

const koromon: DigimonEggCard = {
  id: "ST-001",
  cardType: "digimonEgg",
  name: "滚球兽",
  imgUrl:
    "https://dtcg-pics.moecard.cn/img/card/11_67.MA5tjjNazRQ.png~thumb.jpg",
  color: ["red"],
  type: ["小型"],
  inheritedEffect: (thisDigimon) => {
    if (thisDigimon.digiOrigin && thisDigimon.digiOrigin.length > 4) {
      thisDigimon.DP += 1000;
    }
  },
  illustrator: "T神",
};

export default koromon;
