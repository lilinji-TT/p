<script lang="ts" setup>
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import { useCargoStore } from "../../store/cargo";

const { cargos } = useCargoStore();
</script>

<template>
  <div>
    <Map></Map>
    <Player></Player>
    <template v-for="(cargo, index) in cargos">
      <Cargo :x="cargo.x" :y="cargo.y"></Cargo>
    </template>
  </div>
</template>
