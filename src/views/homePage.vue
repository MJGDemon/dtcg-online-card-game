<template>
  <div>卡组数量：{{ gameStateRef.myDeck.value.length }}</div>
  <div>手牌：{{ gameStateRef.myHands.value.map((x) => x.name) }}</div>

  <button @click="drawCard(1)">抽牌</button>
  <!-- <img
    src="https://dtcg-pics.moecard.cn/img/card/7184_11911.MemSTCBOwfz.jpg~thumb.jpg"
  /> -->
</template>

<script setup lang="ts">
import main from "@/core/main";
import { onMounted } from "vue";
import useGame from "@/hooks/useGame";

const { gameStateRef, drawCard } = useGame();

onMounted(async () => {
  main();
});
</script>
