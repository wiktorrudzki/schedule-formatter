import { Groups } from "../../types";

export type Actions = { type: keyof Groups; newGroup: string };

export type CurrentGroups = {
  week: string;
  k: string;
  gl: string;
  gk: string;
  gp: string;
};
