import React from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function UserManagement() {
  return (
    <body>
      <h1>User Management</h1>
      <Filters />
      <Table />
      <Footer />
    </body>
  );
}
