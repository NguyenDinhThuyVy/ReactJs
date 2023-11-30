import React from 'react'

export default function useGetUser() {
  return {
    const [user, setUser] = useState({});
    useEffect(() => {
      getUser().then((res) => {
        setUser(res.data);
      });
    }, []);
  }
}
