import { useState } from "react";
import Cookies from "universal-cookie";
import { groups as x } from "../data/groups";
import { CurrentGroups } from "../types";
import { GroupsContext } from "./GroupsContext";

type Props = {
  children: React.ReactNode;
};

const GroupsProvider = ({ children }: Props) => {
  const Context = GroupsContext;

  const cookies = new Cookies();
  let obj: CurrentGroups = {
    week: "",
    k: "",
    gl: "",
    gp: "",
    gk: "",
  };

  let key: keyof typeof x;
  for (key in x) {
    obj[key] =
      cookies.get(key) && cookies.get(key) !== "undefined"
        ? cookies.get(key)
        : x[key][0];
  }

  const [groups, setGroups] = useState(obj);

  function changeGroup(keyToChange: keyof typeof x, newValue: string) {
    setGroups((prev) => ({
      ...prev,
      [keyToChange]: newValue,
    }));
  }

  return (
    <Context.Provider value={[groups, changeGroup]}>
      {children}
    </Context.Provider>
  );
};

export default GroupsProvider;
