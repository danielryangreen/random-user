import React from "react";

function Table(props) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.filteredUsers.map(employee => (
            <tr>
              <td><img alt="employee headshot" src={employee.picture.thumbnail} /></td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.location.city}</td>
              <td>{employee.location.state}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
