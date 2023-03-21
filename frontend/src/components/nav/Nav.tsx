import { groups } from "../../data/groups";
import "./nav.css";
import Select from "./Select";

const Nav = () => (
  <nav className="nav">
    <ul className="ul">
      <Select groups={groups.week} type="week" />
      <Select groups={groups.k} type="k" />
      <Select groups={groups.gl} type="gl" />
      <Select groups={groups.gk} type="gk" />
      <Select groups={groups.gp} type="gp" />
    </ul>
  </nav>
);

export default Nav;
