import { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import UserList from "../../components/UserList/UserList";
import "./UserManagement.css";
import { readUsers, filterUsers } from "../../api/service";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filterStatus, setFilters] = useState({status : null, 
                                                name: null,
                                                date: null});

  const read = async () => {
    const users = await readUsers();
    setUsers(users);
    console.table(users)
  };
 
  useEffect(() => {
    read();
  }, [])

  let user = filterUsers(users, filterStatus)

  return (
    <div className="user-management">
      <header >
        <h1>User Management</h1>
        <Filters statusHandler={setFilters}/>
      </header>
      <UserList users={user} />
    </div>
  );
}