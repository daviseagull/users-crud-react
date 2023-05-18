import { useState, useEffect } from "react";
import "./UserManagement.css";
import Filters from "../../components/filters/Filters";
import UserList from "../../components/user_list/UserList";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("https://mack-webmobile.vercel.app/api/users");
      const users = [
        {
          "_id": "64669091f9a16b42efcc0231",
          "name": "Paulo Miranda",
          "avatar": "https://randomuser.me/api/portraits/men/34.jpg",
          "email": "mirandinha999@gmail.com",
          "salary": 4000,
          "date": "1968-07-05",
          "status": "Active",
          "__v": 0
        },
        {
          "_id": "6466935ff9a16b42efcc0249",
          "name": "Daniel Santos",
          "avatar": "https://randomuser.me/api/portraits/men/46.jpg",
          "email": "danielsan@gmail.com",
          "salary": 3500,
          "date": "1980-03-15",
          "status": "Inactive",
          "__v": 0
        },
        {
          "_id": "6466aa4d25cc369d801d613f",
          "name": "teste super teste",
          "avatar": "https://joeschmoe.io/api/v1/random",
          "email": "teste@teste.com",
          "salary": 456,
          "date": "2023-02-21",
          "status": "Active",
          "__v": 0
        },
        {
          "_id": "6466ae2b98e501e454ead057",
          "name": "Teste",
          "avatar": "https://randomuser.me/api/portraits/women/72.jpg",
          "email": "teste@teste.com.br",
          "salary": 1000,
          "date": "1999-07-14",
          "status": "Inactive",
          "__v": 0
        },
        {
          "_id": "64669091f9a16b42efcc0231",
          "name": "Paulo Miranda",
          "avatar": "https://randomuser.me/api/portraits/men/34.jpg",
          "email": "mirandinha999@gmail.com",
          "salary": 4000,
          "date": "1968-07-05",
          "status": "Active",
          "__v": 0
        },
        {
          "_id": "6466935ff9a16b42efcc0249",
          "name": "Daniel Santos",
          "avatar": "https://randomuser.me/api/portraits/men/46.jpg",
          "email": "danielsan@gmail.com",
          "salary": 3500,
          "date": "1980-03-15",
          "status": "Inactive",
          "__v": 0
        },
        {
          "_id": "6466aa4d25cc369d801d613f",
          "name": "teste super teste",
          "avatar": "https://joeschmoe.io/api/v1/random",
          "email": "teste@teste.com",
          "salary": 456,
          "date": "2023-02-21",
          "status": "Active",
          "__v": 0
        },
        {
          "_id": "6466ae2b98e501e454ead057",
          "name": "Teste",
          "avatar": "https://randomuser.me/api/portraits/women/72.jpg",
          "email": "teste@teste.com.br",
          "salary": 1000,
          "date": "1999-07-14",
          "status": "Inactive",
          "__v": 0
        },
        {
          "_id": "64669091f9a16b42efcc0231",
          "name": "Paulo Miranda",
          "avatar": "https://randomuser.me/api/portraits/men/34.jpg",
          "email": "mirandinha999@gmail.com",
          "salary": 4000,
          "date": "1968-07-05",
          "status": "Active",
          "__v": 0
        },
        {
          "_id": "6466935ff9a16b42efcc0249",
          "name": "Daniel Santos",
          "avatar": "https://randomuser.me/api/portraits/men/46.jpg",
          "email": "danielsan@gmail.com",
          "salary": 3500,
          "date": "1980-03-15",
          "status": "Inactive",
          "__v": 0
        },
        {
          "_id": "6466aa4d25cc369d801d613f",
          "name": "teste super teste",
          "avatar": "https://joeschmoe.io/api/v1/random",
          "email": "teste@teste.com",
          "salary": 456,
          "date": "2023-02-21",
          "status": "Active",
          "__v": 0
        },
        {
          "_id": "6466ae2b98e501e454ead057",
          "name": "Teste",
          "avatar": "https://randomuser.me/api/portraits/women/72.jpg",
          "email": "teste@teste.com.br",
          "salary": 1000,
          "date": "1999-07-14",
          "status": "Inactive",
          "__v": 0
        }
      ]
      // const data = await response.json();
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
      <main className="cards">
        <UserList users={users} />
      </main>
    </div>
  );
}
