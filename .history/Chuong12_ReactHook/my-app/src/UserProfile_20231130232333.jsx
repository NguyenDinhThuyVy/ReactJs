import React, { useContext } from "react";
import Profile from "./Profile";

export default function UserProfile() {
  const { increaseAge } = useContext(useContext);
  return (
    <div>
      <Profile firstName={firstName} age={age} address={address} />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
