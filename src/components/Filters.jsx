import React from "react";
import SearchSvg from '../assets/search.svg';
import UserPlusSvg from '../assets/user-plus.svg';

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
          <input
            class="rounded-input"
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
          />
        </div>
        <div class="filter">
          <input
            class="rounded-input"
            type="date"
            name="register_date"
            id="register_date"
          />
        </div>
        <button id="search" type="submit">
          <img src={SearchSvg} alt="" />
        </button>
      </form>
      <aside>
        <button id="create-user">
          Create <img src={UserPlusSvg}  alt=""/>
        </button>
      </aside>
    </div>
  );
}
