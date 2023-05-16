import React from "react";
import EditSvg from "../assets/edit.svg";
import TrashSvg from "../assets/trash.svg";

export default function Table() {
  return (
    <div className="table">
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Birthday</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td> foto</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>
            <div id="actions">
              <button>
                <img src={EditSvg} alt="" />
              </button>
              <button>
                <img src={TrashSvg} alt="" />
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
