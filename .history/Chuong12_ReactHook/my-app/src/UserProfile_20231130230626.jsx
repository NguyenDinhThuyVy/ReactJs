import React from "react";

export default function UserProfile() {
  return <div><ul>
  <li>First Name: {firstName}</li>
  <li>Age: {age}</li>
  <li>Nation: {address.nation}</li>
  <li>City: {address.city.street}</li>
  <li>City: {address.city.house}</li>
</ul>
<button onClick={increaseAge}>Increase Age</button>div>;
}
