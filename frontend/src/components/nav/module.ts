export type Actions =
  | { type: "WEEK"; newGroup: string}
  | { type: "K"; newGroup: string }
  | { type: "GL"; newGroup: string }
  | { type: "GK"; newGroup: string }
  | { type: "GP"; newGroup: string };

export type CurrentGroups = {
  week: string;
  k: string;
  gl: string;
  gk: string;
  gp: string;
};
