import React from "react";
import './UserCard.css';

export default function UserCard({ user }) {
  const user_state = user.status === "Active" ? "state-active" : "state-inactive"
  return (
    <div className="card">
      <img id="avatar" src={user.avatar} alt="user avatar" />
      <p id="name">{user.name}</p>
      <div id="state" className={user_state}>{user.status}</div>
    </div>
  );
}
