import { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import UserList from "../../components/UserList/UserList";
import "./UserManagement.css";
import { readUsers } from "../../api/service";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filterStatus, setFilterStatus] = useState(null);

  const read = async () => {
    const users = await readUsers({status: filterStatus});
    setUsers(users, {status: filterStatus});
    console.table(users)
  };

  useEffect(() => {
    read();
  }, [])

  return (
    <div className="user-management">
      <header >
        <h1>User Management</h1>
        <Filters statusHandler={setFilterStatus}/>
      </header>
      <UserList users={users} />
    </div>
  );
}
