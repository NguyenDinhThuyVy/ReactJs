import useGetUser from "../useGetUser";

export default function Navigation() {
  const { user } = useGetUser({});

  return (
    <div>
      {" "}
      Navigation {""}
      {user?.name}
    </div>
  );
}
