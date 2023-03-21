import { createContext } from "react";
import { groups } from "../data/groups";
import { CurrentGroups } from "../types";

export const GroupsContext = createContext<
  | [
      CurrentGroups,
      (keyToChange: keyof typeof groups, newValue: string) => void
    ]
  | undefined
>(undefined);
