import logo from "./logo.svg";
import "./App.css";
import Cart from "./Cart";
import Productlist from "./Productlist";

function App() {
  return (
    <div>
      <Cart isShow={false} />
      <Productlist />
    </div>
  );
}

export default App;
