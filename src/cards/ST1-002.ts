// 比丘兽

import { CardTypeEnum, DigimonCard } from "@/types/card";

const Biyomon: DigimonCard = {
  id: "ST-001",
  cardType: CardTypeEnum.digimon,
  name: "比丘兽",
  playCost: 2,
  digivolveCost: 3,
  dp: 3000,
  imgUrl:
    "https://dtcg-wechat.moecard.cn/img/card/12_68.MAlC8gE31bQ.png~thumb.jpg",

  color: ["red"],
  type: ["Bird"],
  inheritedEffect: (thisDigimon) => {
    thisDigimon.buffs.push(() => {
      thisDigimon.DP += 1000;
    });
  },
  illustrator: "T神",
};

export default Biyomon;
