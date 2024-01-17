import { computed, onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../../store/player";

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  } = usePlayerStore();

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
    }
  }

  onMounted(() => {
    window.addEventListener("keyup", handleKeyUp);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyUp);
  });
}

export function usePosition(pos: { x: number; y: number }) {
  const STEP = 32;
  const Position = computed(() => {
    return { left: pos.x * STEP + "px", top: pos.y * STEP + "px" };
  });
  return {
    Position,
  };
}
