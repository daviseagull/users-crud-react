import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchSvg from "../../assets/search.svg";
import UserPlusSvg from "../../assets/user-plus.svg";
import "./Filters.css";

export default function Filters({statusHandler}) {
  const [status, setStatus] = useState(null);
  const [name, setName] = useState('');
  const [registerDate, setRegisterDate] = useState('');

  const filterStatus = (e) => {
    statusHandler({status: status,
                  name: name,
                  date: registerDate})
  };

  return (
    <div className="filters">
      <div class="filter-form">
        <div class="filter">
          <select class="rounded-input" 
                  name="status" 
                  id="lang"
                  onChange={(e) => { (e.target.value == "All") ? setStatus(null) : setStatus(e.target.value) }}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div class="filter">
          <input class="rounded-input" 
                  type="text" 
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div class="filter">
          <input
            class="rounded-input"
            type="date"
            name="register_date"
            id="register_date"
            value={registerDate}
            onChange={(e) => {setRegisterDate(e.target.value)}}
          />
        </div>
        <button className="btn" id="search" onClick={filterStatus}>
          <img src={SearchSvg} alt=""/>
        </button>
      </div>
      <aside>
        <div className="btn" id="open-form">
          <Link className="link" to="/user-form" state={{ from: "create" }}>
            Create <img src={UserPlusSvg} alt="" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
