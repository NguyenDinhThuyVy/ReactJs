import { useEffect, useState } from "react";
import { getUser } from "./api";

export default function useGetUser(value) {
  const [user, setUser] = useState(value);
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);
  return { user };
}
