import { Nav, Template } from "./components";
import "./app.css";
import GroupsProvider from "./hooks/GroupsProvider";

const App = () => (
  <GroupsProvider>
    <div className="app">
      <Nav />
      <Template rows={15} columns={6} />
    </div>
  </GroupsProvider>
);

export default App;
