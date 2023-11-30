import React, { useContext } from "react";
import Profile from "./Profile";

export default function UserProfile() {
  const { increaseAge } = useContext(useContext);
  return (
    <div>
      <Profile />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
