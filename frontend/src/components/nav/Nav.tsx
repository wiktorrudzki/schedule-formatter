import { groups } from "../../data/groups";
import "./nav.css";
import { NavMenu } from "./components";

const Nav = () => (
  <nav className="nav">
    <ul className="ul">
      <NavMenu type="week" groups={groups.week} />
      <NavMenu type="k" groups={groups.k} />
      <NavMenu type="gl" groups={groups.gl} />
      <NavMenu type="gk" groups={groups.gk} />
      <NavMenu type="gp" groups={groups.gp} />
    </ul>
  </nav>
);

export default Nav;
