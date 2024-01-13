import { defineStore } from "pinia";

export enum MapTail {
  WALL = 1,
  FLOOR = 2,
}
const MAP_NAME = "MAP FOR TUI XIANG ZI";

type Map = MapTail[][];

interface Position {
  x: number;
  y: number;
}
export const useMapStore = defineStore(MAP_NAME, () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ];

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap);
  }

  function isWall(position: Position) {
    return map[position.x][position.y] === MapTail.WALL;
  }

  return {
    map,
    setupMap,
    isWall,
  };
});
