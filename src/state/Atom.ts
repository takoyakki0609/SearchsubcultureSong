import { atom } from "recoil";

export const typeState = atom({
  key: "typeState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
