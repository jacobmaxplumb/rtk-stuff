import axios from "axios";
import { useEffect, useState } from "react";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");

  const getUsers = async () => {
    const { data } = await axios.get('http://localhost:9000/users');
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  const addUser = async () => {
    const { data } = await axios.post('http://localhost:9000/users', { username });
    setUsers([...users, data]);
  }

  return (
    <>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};
