import React, { useState } from "react";

export default function User() {
  // firstName
  const [firstName, setfirstName] = useState("Alex");
  // Age
  const [age, setAge] = useState(24);
  // forceRerender
  const [, forceRerender] = useState(0);
  // address
  const [address, setAddress] = useState({
    nation: "VietNam",
    city: "Da Nang",
  });
  // function increaseAge
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  // function changeName
  const changeName = () => {
    setfirstName((prevfirstName) => prevfirstName + " bi");
  };
  // function no re-render
  const rerender = () => {
    forceRerender((preState) => preState + 1);
  };
  console.log("Re-render");
  const changeCity = () => {
    setAddress(preveAdress =>{
      ...preveAdress,
      city: "Hanoi",
    });
  };
  return (
    <div>
      <h1>User functional component</h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>City: {address.city}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeName}>Change Firstname</button>
      <button onClick={forceRerender}> Re-render</button>
      <button onClick={changeCity}> Change City</button>
    </div>
  );
}
