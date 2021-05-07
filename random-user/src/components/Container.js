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

  sortNameFirst = () => {
    const sortedUsers = this.state.filteredUsers.sort(function(a, b) {
      var x = a.name.first.toLowerCase();
      var y = b.name.first.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };
  
  sortNameLast = () => {
    const sortedUsers = this.state.filteredUsers.sort(function(a, b) {
      var x = a.name.last.toLowerCase();
      var y = b.name.last.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };
  
  sortLocationCity = () => {
    const sortedUsers = this.state.filteredUsers.sort(function(a, b) {
      var x = a.location.city.toLowerCase();
      var y = b.location.city.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };
  
  sortLocationState = () => {
    const sortedUsers = this.state.filteredUsers.sort(function(a, b) {
      var x = a.location.state.toLowerCase();
      var y = b.location.state.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({ filteredUsers: sortedUsers });
  };
  
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  filterNameFirst = input => {
    const filteredUsers = this.state.randomUsers.filter(user => user.name.first.toLowerCase() === input.toLowerCase());
    this.setState({ filteredUsers });
  };

  filterNameLast = input => {
    const filteredUsers = this.state.randomUsers.filter(user => user.name.last.toLowerCase() === input.toLowerCase());
    this.setState({ filteredUsers });
  };

  filterLocationCity = input => {
    const filteredUsers = this.state.randomUsers.filter(user => user.location.city.toLowerCase() === input.toLowerCase());
    this.setState({ filteredUsers });
  };

  filterLocationState = input => {
    const filteredUsers = this.state.randomUsers.filter(user => user.location.state.toLowerCase() === input.toLowerCase());
    this.setState({ filteredUsers });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.nameFirst) {
      this.filterNameFirst(this.state.nameFirst);
    }
    if (this.state.nameLast) {
      this.filterNameLast(this.state.nameLast);
    }
    if (this.state.locationCity) {
      this.filterLocationCity(this.state.locationCity);
    }
    if (this.state.locationState) {
      this.filterLocationState(this.state.locationState);
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
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
        </div>
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
