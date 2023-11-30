import React, { useState } from "react";

export default function User() {
  const [firstNAme, setfirstName] = useState("Alex");
  const [age, setAge] = useState(24);
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  return <div>User</div>;
}
