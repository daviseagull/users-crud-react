import React from "react";
import { Link } from "react-router-dom";
import SearchSvg from "../../assets/search.svg";
import UserPlusSvg from "../../assets/user-plus.svg";
import "./Filters.css";

export default function Filters() {
  return (
    <div className="filters">
      <form class="filter-form">
        <div class="filter">
          <select class="rounded-input" name="status" id="lang">
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </select>
        </div>
        <div class="filter">
          <input class="rounded-input" type="text" placeholder="Nome" />
        </div>
        <div class="filter">
          <input
            class="rounded-input"
            type="date"
            name="register_date"
            id="register_date"
          />
        </div>
        <button className="btn" id="search" type="submit">
          <img src={SearchSvg} alt="" />
        </button>
      </form>
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
