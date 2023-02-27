import React from "react";
import Items from "./Items";
import { groups } from "../../data/groups";
import "./nav.css";

const Nav: React.FC = () => (
  <nav className="nav">
    <ul className="ul">
      <Items type="week" groups={groups.week} />
      <Items type="k" groups={groups.k} />
      <Items type="gl" groups={groups.gl} />
      <Items type="gk" groups={groups.gk} />
      <Items type="gp" groups={groups.gp} />
    </ul>
  </nav>
);

export default Nav;
