import { useState, useEffect } from "react";
import "./UserManagement.css";
import Filters from "../../components/Filters/Filters";
import UserList from "../../components/UserList/UserList";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://mack-webmobile.vercel.app/api/users");
      const users = await response.json();
      setUsers(users);
    }
    fetchData()
  }, [])

  return (
    <div className="userManagement">
      <header >
        <h1>User Management</h1>
        <Filters />
      </header>
      <UserList users={users} />
    </div>
  );
}
