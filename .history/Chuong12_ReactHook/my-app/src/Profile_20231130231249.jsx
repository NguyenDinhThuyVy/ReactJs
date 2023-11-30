import React from "react";

export default function Profile({ firstName, age, address }) {
  return (
    <div>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>City: {address.city.street}</li>
        <li>City: {address.city.house}</li>
      </ul>
    </div>
  );
}
