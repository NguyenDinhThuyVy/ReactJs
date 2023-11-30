import React, { useState } from "react";
const initialAddress = () => {
  // console.log('initialAddress')
  return {
    nation: "Vietnam",
    city: {
      street: "200 Dien Bien Phu, Da Nang",
      house: "Building",
    },
  };
};
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
    city: {
      street: "200 Dien Bien Phu",
      house: "quang nam",
      hihi: "quang nam",
      het: "quang nam",
    },
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
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city };
      newCity.street = "71 Nguyen Tuong Pho";
      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };
  return (
    <div>
      <h1>User functional component</h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>City: {address.city.street}</li>
        <li>City: {address.city.house}</li>
        <li>City: {address.city.het}</li>
        <li>City: {address.city.hihi}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeName}>Change Firstname</button>
      <button onClick={forceRerender}> Re-render</button>
      <button onClick={changeCity}> Change City</button>
    </div>
  );
}
