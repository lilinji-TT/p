<script lang="ts" setup>
import floorImg from "../../assets/floor.png";
import wallImg from "../../assets/wall.png";
import { MapTail, useMapStore } from "../../store/map.ts";
const { map } = useMapStore();
</script>

<template>
  <div>
    <div v-for="(row, i) in map" :key="i" class="flex">
      <div v-for="(col, j) in row" :key="j">
        <template v-if="col === MapTail.WALL">
          <img :src="wallImg" alt="" />
        </template>
        <template v-else-if="col === MapTail.FLOOR">
          <img :src="floorImg" alt="" />
        </template>
      </div>
    </div>
  </div>
</template>
