import React from "react";
import "./UserDetailsCard.css";
import TrashSvg from "../../assets/trash.svg";
import EditSvg from "../../assets/edit.svg";

export default function UserCardDetails({ user }) {
  const user_state =
    user.status === "Active" ? "state-active" : "state-inactive";
  return (
  <div className="card-details">
    <div className="card-details-top-bar">
      <img src={EditSvg} alt="" />
      <img src={TrashSvg} alt="" />
    </div>
    <main className="card-details-user">
      <img id="card-details-avatar" src={user.avatar} alt="user avatar" />
      <div className="card-details-user-info">
        <div className="card-details-user-info-field">
          <p className="card-details-user-info-field-title">Name</p>
          <p className="card-details-user-info-field-info">{user.name}</p>
        </div>
        <div className="card-details-user-info-field">
          <p className="card-details-user-info-field-title">Email</p>
          <p className="card-details-user-info-field-info">{user.email}</p>
        </div>
        <div className="card-details-user-info-field">
          <p className="card-details-user-info-field-title">Salary</p>
          <p className="card-details-user-info-field-info">{user.salary}</p>
        </div>
        <div className="card-details-user-info-field">
          <p className="card-details-user-info-field-title">Date</p>
          <p className="card-details-user-info-field-info">{user.date}</p>
        </div>
        <div id="card-details-state" className={user_state}>
            {user.status}
        </div>
      </div>
    </main>
  </div>
  );
}
