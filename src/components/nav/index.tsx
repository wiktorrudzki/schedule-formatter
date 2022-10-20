import React from "react";
import Items from "./Items";
import { Actions, CurrentGroups } from "./module";
import "./nav.css";

type Props = {
  currentGroups: CurrentGroups;
  currentGroupsDispatch: React.Dispatch<Actions>;
}

const Nav: React.FC<Props> = ({ currentGroups, currentGroupsDispatch }) => {
  const groups = {
    week: ["N", "P"],
    k: ["12K2", "12K1"],
    gl: ["L04", "L03", "L02", "L01"],
    gk: ["K02", "K03", "K01"],
    gp: ["P02", "P03", "P01"],
  };

  return (
    <nav className="nav">
      <ul className="ul">
        <Items
          type="WEEK"
          groups={groups.week}
          currentGroups={currentGroups}
          currentGroupsDispatch={currentGroupsDispatch}
        />
        <Items
          type="K"
          groups={groups.k}
          currentGroups={currentGroups}
          currentGroupsDispatch={currentGroupsDispatch}
        />
        <Items
          type="GL"
          groups={groups.gl}
          currentGroups={currentGroups}
          currentGroupsDispatch={currentGroupsDispatch}
        />
        <Items
          type="GK"
          groups={groups.gk}
          currentGroups={currentGroups}
          currentGroupsDispatch={currentGroupsDispatch}
        />
        <Items
          type="GP"
          groups={groups.gp}
          currentGroups={currentGroups}
          currentGroupsDispatch={currentGroupsDispatch}
        />
      </ul>
    </nav>
  );
};

export default Nav;
