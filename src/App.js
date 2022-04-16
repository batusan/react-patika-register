import "./App.css";

import LeftPanel from "./components/LeftPanel";
import Loader from "./components/Loader";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <>
      <Loader />
      <div className="wrapper">
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
}

export default App;
