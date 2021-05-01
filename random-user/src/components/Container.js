import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import API from "../utils/API";

class Container extends Component {
  state = {
    nameFirst: "",
    nameLast: "",
    locationCity: "",
    locationState: "",
    randomUsers: []
  };

  componentDidMount() {
    this.getRandomUsers();
  }

  getRandomUsers = () => {
    API.get()
      .then(res => this.setState({ randomUsers: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  filterNameLast = input => {
    const randomUsers = this.state.randomUsers.filter(user => user.name.last === input);
    this.setState({ randomUsers });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.nameLast) {
      this.filterNameLast(this.state.nameLast);
    }
    this.setState({
      nameFirst: "",
      nameLast: "",
      locationCity: "",
      locationState: ""
    });
  };

  render() {
    return (
      <div>
        <Form
          nameFirst={this.state.nameFirst}
          nameLast={this.state.nameLast}
          locationCity={this.state.locationCity}
          locationState={this.state.locationState}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          randomUsers={this.state.randomUsers}
        />
      </div>
    );
  }
}

export default Container;
