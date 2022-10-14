import Nav from "./components/nav";
import Template from "./components/template";
import "./app.css"

function App() {
  const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

  return (
    <div className="App">
      <Nav />
      <Template rows={15} columns={6} daysOfWeek={daysOfWeek} />
    </div>
  );
}

export default App;
