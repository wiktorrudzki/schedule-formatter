import Nav from "./components/nav";
import Template from "./components/template";
import "./app.css";

function App() {
  const daysOfWeek = [
    "Godzina",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
  ];

  return (
    <div className="app">
      <Nav />
      <Template rows={17} columns={6} daysOfWeek={daysOfWeek} />
    </div>
  );
}

export default App;
