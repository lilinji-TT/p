import { createPinia, setActivePinia } from "pinia";
import { beforeEach, expect, it } from "vitest";
import { usePlayerStore } from "../../../store/player";
import { useMove } from "../player";

beforeEach(() => {
  setActivePinia(createPinia());
});

it("should move to left when press ArrowLeft", () => {
  const { Player } = usePlayerStore();
  Player.x = 1;
  Player.y = 1;
  useMove();

  window.dispatchEvent(
    new KeyboardEvent("keyup", {
      code: "ArrowLeft",
    })
  );

  expect(Player.x).toBe(0);
});
