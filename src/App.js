import "./App.css";

import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="wrapper flex">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
