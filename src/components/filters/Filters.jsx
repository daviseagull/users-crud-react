import { useState } from "react";
import SearchSvg from "../../assets/search.svg";
import "./Filters.css";

export default function Filters({statusHandler}) {
  const [status, setStatus] = useState(null);
  const [name, setName] = useState('');
  const [registerDate, setRegisterDate] = useState('');

  const filterStatus = () => {
    statusHandler({ status: status,
                    name: name,
                    date: registerDate })
  };

  return (
    <section className="filters">
      <div className="filter">
        <select className="rounded-input" name="status" 
                onChange={(e) => { (e.target.value === "All") ? setStatus(null) : setStatus(e.target.value) }}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="filter">
        <input className="rounded-input" type="text" placeholder="Nome" value={name}
               onChange={(e) => {setName(e.target.value)}}/>
      </div>
      <div className="filter">
        <input className="rounded-input" type="date" name="register_date" id="register_date" value={registerDate}
               onChange={(e) => {setRegisterDate(e.target.value)}}/>
      </div>
      <button className="btn" id="search" onClick={filterStatus}>
        <img src={SearchSvg} alt=""/>
      </button>
    </section>
  );
}
