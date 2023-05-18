import { useState, useEffect } from "react";
import "./UserManagement.css";
import Filters from "../../components/filters/Filters";
import UserList from "../../components/user_list/UserList";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://mack-webmobile.vercel.app/api/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchData()
  }, [])

  return (
    <div className="userManagement">
      <header >
        <h1>User Management</h1>
        <Filters />
      </header>
      <main className="cards">
        <UserList users={users} />
      </main>
    </div>
  );
}
