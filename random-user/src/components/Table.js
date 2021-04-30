import React, { Component } from "react";
// import employees from "../employees.json";
import API from "../utils/API";

class Table extends Component {
  state = {
    randomUsers: []
  };

  componentDidMount() {
    API.getRandomUsers()
      .then(res => this.setState({ randomUsers: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <table>
        {this.state.randomUsers.map(employee => (
          <tbody>
            <tr>
              <td>{employee.gender}</td>
              <td>{employee.name.title}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

export default Table;
