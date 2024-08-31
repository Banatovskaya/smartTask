import "./users.css";
import { User } from "../../interfaces";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../store/store";
import { Filter } from "../../components/filter";

export const UsersPage = () => {
  const users = useSelector(
    (state: RootState) => state.usersListReducer.usersData
  );
  const filters = useSelector(
    (state: RootState) => state.filtersReducer.filtersData
  );

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    user.username.toLowerCase().includes(filters.userName.toLowerCase()) &&
    user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );

  return (
    <>
      <h1 className="header">USERS LIST</h1>
      <div className="users-container">
        {users.length ? (
          <>
            <div className="title">
              <div className="name">Name</div>
              <div className="userName">Username</div>
              <div className="email">Email</div>
              <div className="phone">Phone</div>
            </div>
            <Filter />
            {filteredUsers.map((user: User) => (
              <div key={user.id} className="user">
                <div className="name">{user.name}</div>
                <div className="userName">{user.username}</div>
                <div className="email">{user.email}</div>
                <div className="phone">{user.phone}</div>
              </div>
            ))}
          </>
        ) : (
          <div className="noData">no data</div>
        )}
      </div>
    </>
  );
};
