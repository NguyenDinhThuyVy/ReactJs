import React, { useEffect, useState } from "react";
import { getUser } from "../api";

export default function Navigation() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div>
      {" "}
      Navigation {""}
      {user?.name}
    </div>
  );
}
