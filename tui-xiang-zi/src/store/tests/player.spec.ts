import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useMapStore } from "../map";
import { usePlayerStore } from "../player";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ]);
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

  describe("collision wall", () => {
    beforeEach(() => {
      const map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ];
      const { setupMap } = useMapStore();

      setupMap(map);
    });

    it("should not move to left when collision wall", () => {
      const { movePlayerToLeft, Player } = usePlayerStore();
      Player.x = 1;
      Player.y = 1;

      movePlayerToLeft();

      expect(Player.x).toBe(1);
    });

    it("should not move to Right when collision wall", () => {
      const { movePlayerToRight, Player } = usePlayerStore();
      Player.x = 3;
      Player.y = 1;

      movePlayerToRight();

      expect(Player.x).toBe(3);
    });

    it("should not move to Up when collision wall", () => {
      const { movePlayerToUp, Player } = usePlayerStore();
      Player.x = 1;
      Player.y = 1;

      movePlayerToUp();

      expect(Player.y).toBe(1);
    });

    it("should not move to down when collision wall", () => {
      const { movePlayerToDown, Player } = usePlayerStore();
      Player.x = 1;
      Player.y = 3;

      movePlayerToDown();

      expect(Player.y).toBe(3);
    });
  });
});
