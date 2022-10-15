import Items from "./Items";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul className="ul">
        <Items groups={["12K1", "12K2"]} />
        <Items groups={["L01", "L02", "L03", "L04"]} />
        <Items groups={["K01", "K02", "K03"]} />
        <Items groups={["PO1", "PO2", "P03"]} />
      </ul>
    </nav>
  )
}

export default Nav;
