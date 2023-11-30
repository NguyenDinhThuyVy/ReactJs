import React, { useState } from "react";

export default function User() {
  const [firstNAme, setfirstName] = useState("Alex");
  const [age, setAge] = useState(24);
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  return (
    <div>
      <h1>User class component</h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {this.state.age}</li>
      </ul>
      <button onClick={this.increaseAge}>Increase Age</button>
    </div>
  );
}
