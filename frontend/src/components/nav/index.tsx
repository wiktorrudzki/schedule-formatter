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
          currentGroupsDispatch={currentGroupsDispatch}
          currentGroup={currentGroups.week}
        />
        <Items
          type="K"
          groups={groups.k}
          currentGroupsDispatch={currentGroupsDispatch}
          currentGroup={currentGroups.k}
        />
        <Items
          type="GL"
          groups={groups.gl}
          currentGroupsDispatch={currentGroupsDispatch}
          currentGroup={currentGroups.gl}
        />
        <Items
          type="GK"
          groups={groups.gk}
          currentGroupsDispatch={currentGroupsDispatch}
          currentGroup={currentGroups.gk}
        />
        <Items
          type="GP"
          groups={groups.gp}
          currentGroupsDispatch={currentGroupsDispatch}
          currentGroup={currentGroups.gp}
        />
      </ul>
    </nav>
  );
};

export default Nav;
