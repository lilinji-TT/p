<script lang="ts" setup>
import KeeperImg from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { useMove, usePosition } from "./player";
useMove();
const { Player } = usePlayerStore();
const { Position } = usePosition(Player);
</script>

<template>
  <div class="absolute" :style="Position">
    <img :src="KeeperImg" alt="Player" />
  </div>
</template>
