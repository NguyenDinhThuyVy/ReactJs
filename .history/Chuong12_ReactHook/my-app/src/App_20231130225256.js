import logo from "./logo.svg";
import "./App.css";
import UserClassComponent from "./User.class";
import User from "./User";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(true);
  return <User />;
}

export default App;
