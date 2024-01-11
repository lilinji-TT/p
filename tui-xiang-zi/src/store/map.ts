import { defineStore } from "pinia";


export enum MapTail {
    WALL = 1,
    FLOOR = 2,
}
const MAP_NAME = "MAP FOR TUI XIANG ZI";

export const useMapStore = defineStore(MAP_NAME, () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ];

  return {
    map,
  };
});
