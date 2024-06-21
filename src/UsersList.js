import { useState } from "react";
import { useAddUserMutation, useGetUsersQuery } from "./store/usersApi";

export const UsersList = () => {
  const [username, setUsername] = useState("");
  const { data: users } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  const handleAddUser = () => {
    addUser({ username });
    setUsername('');
  }

  return (
    <>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleAddUser}>Add</button>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};
