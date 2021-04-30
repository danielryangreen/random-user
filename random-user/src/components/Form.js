import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    city: "",
    state: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      city: "",
      state: ""
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
          />
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleInputChange}
            type="text"
            placeholder="State"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
