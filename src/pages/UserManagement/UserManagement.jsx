import { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import UserList from "../../components/UserList/UserList";
import "./UserManagement.css";
import { readUsers } from "../../api/service";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    read();
  }, [])


  const read = async () => {
    const users = await readUsers();
    setUsers(users);
    console.table(users)
  };

  return (
    <div className="user-management">
      <header >
        <h1>User Management</h1>
        <Filters />
      </header>
      <UserList users={users} />
    </div>
  );
}
