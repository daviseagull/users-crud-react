import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

import "./UserForm.css";
import CancelSvg from "../../assets/error.svg";
import CheckSvg from "../../assets/check.svg";
import BackSvg from "../../assets/back.svg";
import { createUser, readUser, readUsers, updateUser } from "../../api/service";

const UserForm = (type) => {
  const location = useLocation();
  const { from } = location.state;
  const { id } = useParams();
  const navigate = useNavigate();
  let [name, setName] = useState([]);
  let [salary, setSalary] = useState([]);
  let [date, setDate] = useState([]);
  let [email, setEmail] = useState([]);
  let [status, setStatus] = useState([]);

  useEffect(() => {
    console.log(from);
    if (from === "edit") {
      read();
      setStatus("Active");
    }
  }, [id]);

  const setUser = (user) => {
    setName(user.name);
    setSalary(user.salary);
    setDate(user.date);
    setEmail(user.email);
    setStatus(user.status);
  };

  const read = async () => {
    const user = await readUser(id);
    setUser(user);
  };

  const submit = () => {
    from === "create" ? create() : update();
  };

  const create = async () => {
    await createUser(name, salary, email, status, date);
    navigate('/');
  };

  const update = async () => {
    await updateUser(id, name, salary, email, status, date);
    navigate('/');
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const updateDate = (e) => {
    setDate(e.target.value);
  };

  const updateSalary = (e) => {
    setSalary(e.target.value);
  };

  return (
    <div id="user-form-page">
      <header id="user-form-header">
        <Link className="link" to="/">
          <img src={BackSvg} alt="" />
          {from === "create" ? <h1>Create user</h1> : <h1>Update user</h1>}

        </Link>

      </header>

      <div className="user-form">
        <div className="fields">
          <section className="column">
            <input
              className="input-text"
              type="text"
              placeholder="Name"
              onChange={updateName}
              value={name}
            />
            <input
              className="input-text"
              type="email"
              onChange={updateEmail}
              placeholder="Email"
              value={email}
            />
            <input
              className="input-date"
              onChange={updateDate}
              type="date"
              value={date}
            />
          </section>
          <section className="column">
            <input
              className="input-text"
              type="number"
              onChange={updateSalary}
              placeholder="Salary"
              value={salary}
            />
            <select
              className="input-select"
              name="status"
              onChange={updateStatus}
              id="lang"
              value={status}
            >
              <option value="Status">Status</option>
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
          <button className="link" id="confirm" onClick={submit}>
            Confirm <img src={CheckSvg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
