import React from "react";
import './UserList.css';
import UserCard from "../user_card/UserCard";

export default function UserList({ users }) {
  return (
    <div className="user-list">
    {users.map((user) => (
      <UserCard user={user} />
    ))}
    </div>
  );
}
