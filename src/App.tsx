import { useAppDispatch } from "./hooks/hooks";
import { UsersPage } from "./pages/users/users";
import { allUsersSet } from "./store/users.slice";
import { useGetUsersQuery } from "./services/postServise";
import { useEffect } from "react";
import "./App.css";

function App() {
  const addUsersToStore = useAppDispatch(allUsersSet);
  const { data: users = [], isLoading, error } = useGetUsersQuery();

  useEffect(() => {
    if (!isLoading && !error && users.length) {
      addUsersToStore(users);
    }
  }, [users, isLoading, error]);

  if (isLoading) return <h1>...LOADING</h1>;

  if (error) return <h1>ERROR</h1>;

  return <UsersPage />;
}

export default App;
