import { atom } from "recoil";
import { SongData } from "../types/types";

export const typeState = atom({
  key: "typeState",
  default: "",
});

export const searchValueState = atom({
  key: "searchValueState",
  default: "",
});

export const searchDataState = atom<SongData[]>({
  key: "searchDataState",
  default: [],
});
