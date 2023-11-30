import React, { useState } from "react";

export default function User() {
  const [firstName, setfirstName] = useState("Alex");
  const [age, setAge] = useState(24);
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  const changeName = () => {
    setfirstName((prevfirstName) => prevfirstName + " bi");
  };
  console.log("Re-render");
  return (
    <div>
      <h1>User functional component</h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeName}>Change Firstname</button>
    </div>
  );
}
