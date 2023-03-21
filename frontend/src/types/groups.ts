import { groups } from "../data/groups";

type Groups = {
  [K in keyof typeof groups]: typeof groups[K];
};

export default Groups;
