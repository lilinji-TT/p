<script lang="ts" setup>
import KeeperImg from "../../assets/keeper.png";
import { useMove, usePosition } from "./player";
useMove();
const { Position } = usePosition();
</script>

<template>
  <div class="absolute" :style="Position">
    <img :src="KeeperImg" alt="Player" />
  </div>
</template>
