import React, { useEffect, useState } from "react";
import { getUser } from "../api";

export default function Cart() {
  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);
  const { user } = useGetUser();

  return (
    <div>
      Cart {""}
      {user?.name}
    </div>
  );
}
