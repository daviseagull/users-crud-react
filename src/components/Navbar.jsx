import React from "react";

export default function Navbar() {
    return (
        <nav>
        <section>
          <img src="users.svg" />
          <a>CRUD</a>
        </section>
        <section>
          <a class="nav-action" href="crud.html">Home</a>
          <a class="nav-action" href="TIA/TIA.html">About us</a>
        </section>
      </nav>
    );
}