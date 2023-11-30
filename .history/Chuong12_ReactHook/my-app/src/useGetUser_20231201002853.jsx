import { useEffect, useState } from "react";
import { getUser } from "./api";

export default function useGetUser() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);
  return { user };
}
