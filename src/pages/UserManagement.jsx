import React from "react";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import UserList from "../components/user_list/UserList";

export default function UserManagement() {
  // const url = 'https://mack-webmobile.vercel.app/api/users'
  
  // const user_request = fetch(url, {
  //   method: 'GET',
  // })
  //   .then(response => response.json())
  //   .then(responseData => {
  //     console.log('Resposta:', responseData);
  //   })
  //   .catch(error => {
  //     console.log('Erro na requisição:', error);
  //   });

  const users = [
    {
      "_id": "645861f71302d474ea43a2d4",
      "name": "joaozinho Abc",
      "avatar": "https://randomuser.me/api/portraits/women/47.jpg",
      "email": "jkjdnf@sokjf.com",
      "salary": 236,
      "date": "2022-12-12",
      "status": "Active",
      "__v": 0
    },
    {
      "_id": "646195d5f72cc33ef5e2e9e6",
      "name": "Renato Cariani",
      "avatar": "https://pbs.twimg.com/profile_images/1519280000385626112/uByzDEB-_400x400.jpg",
      "email": "renato@cariani.com",
      "salary": 10000000,
      "date": "2023-05-14",
      "status": "Inactive",
      "__v": 0
    },
  ]

  return (
    <div className="userManagement">
      <h1>User Management</h1>
      <Filters />
      <UserList users={users}/>
      <Footer />
    </div>
  );
}
