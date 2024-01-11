import { defineStore } from "pinia";
import { reactive } from "vue";

const PLAYER = "Player";
export const usePlayerStore = defineStore(PLAYER, () => {
  const Player = reactive({ x: 1, y: 1 });

  function movePlayerToLeft() {
    Player.x -= 1;
  }

  function movePlayerToRight() {
    Player.x += 1;
  }

  function movePlayerToUp() {
    Player.y -= 1;
  }

  function movePlayerToDown() {
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
