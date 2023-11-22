// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import BareInput from "./BareInput";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setVisible(false)}>Hide Clock</button>
      {visible && <Clock />} */}
      <BareInput
        type="text"
        value="100"
        className="input-control"
        onchange={() => {}}
      />
    </div>
  );
}

export default App;
