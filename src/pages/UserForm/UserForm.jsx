import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./UserForm.css";
import CancelSvg from "../../assets/error.svg";
import CheckSvg from "../../assets/check.svg";
import BackSvg from "../../assets/back.svg";

const UserForm = (type) => {
  const location = useLocation();
  const { from } = location.state;
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://mack-webmobile.vercel.app/api/users/${id}`
      );
      const user = await response.json();
      setUser(user);
    };
    fetchData();
  }, [id]);

  return (
    <div id="user-form-page">
      <header>
        <Link className="link" to="/">
          <img src={BackSvg} alt="" />
        </Link>

        {from === "create" ? <h1>Create user</h1> : <h1>Update user</h1>}
      </header>

      <form className="user-form">
        <div className="fields">
          <section className="column">
            <input
              className="input-text"
              type="text"
              placeholder="Name"
              value={user.name}
            />
            <input
              className="input-text"
              type="email"
              placeholder="Email"
              value={user.email}
            />
            <input className="input-date" type="date" value={user.date} />
          </section>
          <section className="column">
            <input
              className="input-text"
              type="number"
              placeholder="Salary"
              value={user.salary}
            />
            <select
              className="input-select"
              name="status"
              id="lang"
              value={user.status}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </section>
        </div>
        <div className="form-buttons">
          <Link className="link" to={`/`}>
          <button id="cancel">
            Cancel <img src={CancelSvg} alt="" />
          </button>
          </Link>
          <button id="confirm">
            Confirm <img src={CheckSvg} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
