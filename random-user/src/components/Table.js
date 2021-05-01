import React from "react";

function Table(props) {
  return (
    <table>
      <tbody>
        {props.randomUsers.map(employee => (
          <tr>
            <td><img alt="employee headshot" src={employee.picture.thumbnail} /></td>
            <td>{employee.name.title}</td>
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
  );
}

export default Table;
