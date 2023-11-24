// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import BareInput from "./BareInput";
import Layout from "./Layout";
import BareButton from "./BareButton";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setVisible(false)}>Hide Clock</button>
      {visible && <Clock />} */}
      <Layout>
        <h1>Hello</h1>
        <BareInput
          type="text"
          value="100"
          className="input-control"
          onChange={() => {}}
        />
        <BareButton />
      </Layout>
    </div>
  );
}

export default App;
