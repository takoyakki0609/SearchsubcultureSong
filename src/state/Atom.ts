import { atom } from "recoil";
import { SongData } from "../types/types";

export const typeState = atom({
  key: "typeState",
  default: "",
});

export const clickState = atom({
  key: "clickState",
  default: "",
});

export const searchDataState = atom<SongData[]>({
  key: "searchDataState",
  default: [],
});
