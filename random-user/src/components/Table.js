import React from "react";

function Table(props) {
  return (
    <table>
      {props.employees.map(employee => (
        <tr>
          <td>{employee.results[0].gender}</td>
          <td>{employee.results[0].name.title}</td>
          <td>{employee.results[0].name.first}</td>
          <td>{employee.results[0].name.last}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
