<script lang="ts" setup>
import cargoImg from "../../assets/Cargo.png";
import { usePosition } from "./player";

interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>();

const { Position } = usePosition(props);
</script>

<template>
  <div class="absolute" :style="Position">
    <img :src="cargoImg" alt="Cargo" />
  </div>
</template>
