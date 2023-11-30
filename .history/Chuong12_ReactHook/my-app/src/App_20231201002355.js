import logo from "./logo.svg";
import "./App.css";
import UserClassComponent from "./User.class";
import User from "./User";
import { useState } from "react";
import Cart from "./Header/Cart";
import Navigation from "./Header/Navigation";

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevIsShow) => !prevIsShow)}>
        Change is Show
      </button>{" "} */}
      <Cart />
      <Navigation />
    </div>
  );
}

export default App;
