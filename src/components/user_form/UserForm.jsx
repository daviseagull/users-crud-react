import React from "react";
import { useLocation } from 'react-router-dom'
import "./UserForm.css";
import CancelSvg from "../../assets/error.svg";
import CheckSvg from "../../assets/check.svg";

const UserForm = (type) => {
  const location = useLocation()
  const { from } = location.state

  return (
    <>
    {
      from === 'create' ? 
      <h1>Create user</h1> :
      <h1>Update user</h1>
    }
    
    <form className="user-form">
      <article>
        <section className="column">
          <input className="input-text" type="text" placeholder="First name" />
          <input className="input-text" type="email" placeholder="Email" />
          <input className="input-date" type="date" />
        </section>
        <section className="column">
          <input className="input-text" type="text" placeholder="Last name" />
          <input className="input-text" type="number" placeholder="Salary" />
          <select className="input-select" name="status" id="lang">
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </select>
        </section>
      </article>
      <div className="form-buttons">
        <button id="cancel">
          Cancel <img src={CancelSvg} alt="" />
        </button>
        <button id="confirm">
          Confirm <img src={CheckSvg} alt="" />
        </button>
      </div>
    </form>
    </>
  );
};

export default UserForm;
