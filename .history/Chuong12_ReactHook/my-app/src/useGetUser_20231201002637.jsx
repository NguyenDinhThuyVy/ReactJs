import React from "react";

export default function useGetUser() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);
  return {};
}
