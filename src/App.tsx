import { useAppDispatch } from "./hooks/hooks";
import { UsersPage } from "./pages/users/users";
import { allUsersSet } from "./store/users.slice";
import { useGetUsersQuery } from "./services/postServise";
import { useEffect } from "react";

function App() {
  const addUsersToStore = useAppDispatch(allUsersSet);

  const { data: users = [], isLoading, error } = useGetUsersQuery();

  useEffect(() => {
    if (!isLoading && !error) {
      addUsersToStore(users);
    }
  }, [users, isLoading, error]);

  if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;

  if (error) return <h1 className="p-10">ERROR</h1>;

  return <UsersPage />;
}

export default App;
