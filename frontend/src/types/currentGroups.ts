import { groups } from "../data/groups";

type CurrentGroups = {
  [K in keyof typeof groups]: string;
};

export default CurrentGroups;
