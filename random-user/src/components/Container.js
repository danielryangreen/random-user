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
    randomUsers: [],
    filteredUsers: []
  };

  componentDidMount() {
    this.getRandomUsers();
  }

  getRandomUsers = () => {
    API.get()
      .then(res => this.setState({
        randomUsers: res.data.results,
        filteredUsers: res.data.results
      }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  sortNameFirst = () => {
    const sortedUsers = this.state.randomUsers.sort(function(a, b) {
      var x = a.name.first.toLowerCase();
      var y = b.name.first.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };

  sortNameLast = () => {
    const sortedUsers = this.state.randomUsers.sort(function(a, b) {
      var x = a.name.last.toLowerCase();
      var y = b.name.last.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };

  sortLocationCity = () => {
    const sortedUsers = this.state.randomUsers.sort(function(a, b) {
      var x = a.location.city.toLowerCase();
      var y = b.location.city.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };

  sortLocationState = () => {
    const sortedUsers = this.state.randomUsers.sort(function(a, b) {
      var x = a.location.state.toLowerCase();
      var y = b.location.state.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };

  filterNameLast = input => {
    const filteredUsers = this.state.randomUsers.filter(user => user.name.last === input);
    this.setState({ filteredUsers });
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
          sortNameFirst={this.sortNameFirst}
          sortNameLast={this.sortNameLast}
          sortLocationCity={this.sortLocationCity}
          sortLocationState={this.sortLocationState}
          nameFirst={this.state.nameFirst}
          nameLast={this.state.nameLast}
          locationCity={this.state.locationCity}
          locationState={this.state.locationState}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          filteredUsers={this.state.filteredUsers}
        />
      </div>
    );
  }
}

export default Container;
