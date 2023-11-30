import React, { useState } from "react";

export default function User() {
  const [firstNAme, setfirstName] = useState("Alex");
  const [age, setAge] = useState(24);
  return <div>User</div>;
}
