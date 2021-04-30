import React, { Component } from "react";
import employees from "../employees.json";

class Table extends Component {
  state = {
    employees
  };

  render() {
    return (
      <table>
        {this.state.employees.map(employee => (
          <tbody>
            <tr>
              <td>{employee.results[0].gender}</td>
              <td>{employee.results[0].name.title}</td>
              <td>{employee.results[0].name.first}</td>
              <td>{employee.results[0].name.last}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

export default Table;
