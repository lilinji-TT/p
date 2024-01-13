import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";

const PLAYER = "Player";
export const usePlayerStore = defineStore(PLAYER, () => {
  const { isWall } = useMapStore();
  const Player = reactive({ x: 1, y: 1 });

  function movePlayerToLeft() {
    if (isWall({ x: Player.x - 1, y: Player.y })) return;
    Player.x -= 1;
  }

  function movePlayerToRight() {
    if (isWall({ x: Player.x + 1, y: Player.y })) return;
    Player.x += 1;
  }

  function movePlayerToUp() {
    if (isWall({ x: Player.x, y: Player.y - 1 })) return;
    Player.y -= 1;
  }

  function movePlayerToDown() {
    if (isWall({ x: Player.x, y: Player.y + 1 })) return;
    Player.y += 1;
  }

  return {
    Player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
