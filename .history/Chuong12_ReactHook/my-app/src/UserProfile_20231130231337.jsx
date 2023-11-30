import React from "react";
import Profile from "./Profile";

export default function UserProfile({ firstName, age, address, increaseAge }) {
  return (
    <div>
      <Profile firstName={firstName} age={age} address={address} />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
