// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setVisible(false)}>Hide Clock</button>
      {visible && <Clock />} */}
    </div>
  );
}

export default App;
