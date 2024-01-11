import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { usePlayerStore } from "../player";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should move to left", () => {
    const { movePlayerToLeft, Player } = usePlayerStore();

    Player.x = 1;
    Player.y = 1;

    movePlayerToLeft();

    expect(Player.x).toBe(0);
  });

  it("should move to right", () => {
    const { movePlayerToRight, Player } = usePlayerStore();

    Player.x = 1;
    Player.y = 1;

    movePlayerToRight();

    expect(Player.x).toBe(2);
  });

  it("should move to down", () => {
    const { movePlayerToDown, Player } = usePlayerStore();
    Player.x = 1;
    Player.y = 1;

    movePlayerToDown();

    expect(Player.y).toBe(2);
  });

  it("should move to up", () => {
    const { movePlayerToUp, Player } = usePlayerStore();
    Player.x = 1;
    Player.y = 1;

    movePlayerToUp();

    expect(Player.y).toBe(0);
  });
});
