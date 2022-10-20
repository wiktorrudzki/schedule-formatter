export type Week = "N" | "P";
export type K = "12K2" | "12K1";
export type Gl = "GL01" | "GL02" | "GL03" | "GL04";
export type Gk = "GK01" | "GK02" | "GK03";
export type Gp = "GP01" | "GP02" | "GP03";

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
