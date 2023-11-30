import React, { useEffect, useState } from "react";
// import { getUser } from "../api";
import useGetUser from "../useGetUser";

export default function Navigation() {
  const { user } = useGetUser();

  return (
    <div>
      {" "}
      Navigation {""}
      {user?.name}
    </div>
  );
}
