import { useGetUsersQuery } from "../../services/postServise";
import "./users.css";
import { User } from "../../interfaces";

export const UsersPage = () => {
  const { data: users = [], isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;

  if (error) return <h1 className="p-10">ERROR</h1>; // nuw we dont need err, it is just doesnt show

  console.log(users);
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

            <div className="search-row">
              <input className="name" type="text" placeholder="Search by User" />
              <input className="userName" type="text" placeholder="Search by Username" />
              <input className="email" type="text" placeholder="Search by Email" />
              <input className="phone" type="text" placeholder="Search by Phone" />
            </div>

            {users.map((user: User) => (
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
