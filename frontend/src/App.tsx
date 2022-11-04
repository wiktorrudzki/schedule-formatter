import { useReducer } from "react";
import Cookies from "universal-cookie";
import Nav from "./components/nav";
import Template from "./components/template";
import "./app.css";
import { Actions, CurrentGroups } from "./components/nav/module";

function App() {
  const cookies = new Cookies();

  const daysOfWeek = [
    "Godzina",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
  ];

  const groups = {
    week: ["N", "P"],
    k: ["12K2", "12K1"],
    gl: ["L04", "L03", "L02", "L01"],
    gk: ["K02", "K03", "K01"],
    gp: ["P02", "P03", "P01"],
  };

  const reducer = (state: CurrentGroups, action: Actions) => {
    switch (action.type) {
      case "WEEK":
        return { ...state, week: action.newGroup };
      case "K":
        return { ...state, k: action.newGroup };
      case "GL":
        return { ...state, gl: action.newGroup };
      case "GK":
        return { ...state, gk: action.newGroup };
      case "GP":
        return { ...state, gp: action.newGroup };
      default:
        return state;
    }
  };

  const [currentGroups, currentGroupsDispatch] = useReducer(reducer, {
    week: cookies.get("WEEK"),
    k: cookies.get("K"),
    gl: cookies.get("GL"),
    gk: cookies.get("GK"),
    gp: cookies.get("GP"),
  });

  return (
    <div className="app">
      <Nav currentGroups={currentGroups} currentGroupsDispatch={currentGroupsDispatch} />
      <Template rows={15} columns={6} daysOfWeek={daysOfWeek} currentGroups={currentGroups} currentGroupsDispatch={currentGroupsDispatch} />
    </div>
  );
}

export default App;
