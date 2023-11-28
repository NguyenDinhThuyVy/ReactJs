// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import BareInput from "./BareInput";
import Layout from "./Layout";
import BareButton from "./BareButton";
import LoginControl from "./LoginControl";
import CorrectlyState from "./CorrectlyState";
import ProductList from "./ProductList/ProductList";
import Form from "./Forms/Form";
import UncontrolledComponent from "./Forms/UncontrolledComponent";
import Calculator from "./Calculator/Calculator";
import Inheritance from "./CompositionvsInheritance/Inheritance";
import Composition from "./CompositionvsInheritance/Composition";
import FilterableProductTable from "./ThinkingInReact/FilterableProductTable ";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setVisible(false)}>Hide Clock</button>
      {visible && <Clock />} */}
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput
          type="text"
          value="100"
          className="input-control"
          onChange={() => {}}
        />
        <BareButton />
      </Layout> */}
      {/* <LoginControl /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Inheritance /> */}
      {/* <Composition /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
