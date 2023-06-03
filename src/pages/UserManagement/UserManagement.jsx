import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import UserList from "../../components/UserList/UserList";
import "./UserManagement.css";
import { readUsers, filterUsers } from "../../api/service";
import UserPlusSvg from "../../assets/user-plus.svg";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ status : null, name: null, date: null });

  const read = async () => {
    const users = await readUsers();
    setUsers(users);
    console.table(users)
  };
 
  useEffect(() => {
    read();
  }, [])

  let user = filterUsers(users, filters)

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <header className="user-management-header">
        <Filters statusHandler={setFilters}/>
        <div className="user-management-header-create-user btn" id="open-form">
          <Link className="link" to="/user-form" state={{ from: "create" }}>
            Create <img src={UserPlusSvg} alt="" />
          </Link>
        </div>
      </header>
      <UserList users={user} />
    </div>
  );
}