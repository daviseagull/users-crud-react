import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserForm.css";
import CancelSvg from "../../assets/error.svg";
import CheckSvg from "../../assets/check.svg";
import BackSvg from "../../assets/back.svg";

const UserForm = (type) => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <div id="user-form-page">
      <header>
        <Link className="link" to="/">
          <img src={BackSvg} />
        </Link>

        {from === "create" ? <h1>Create user</h1> : <h1>Update user</h1>}
      </header>

      <form className="user-form">
        <div className="fields">
          <section className="column">
            <input
              className="input-text"
              type="text"
              placeholder="First name"
            />
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
        </div>
        <div className="form-buttons">
          <button id="cancel">
            Cancel <img src={CancelSvg} alt="" />
          </button>
          <button id="confirm">
            Confirm <img src={CheckSvg} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
