import React from "react";

function Form(props) {
  return (
    <form>
      <input
        value={props.nameFirst}
        name="nameFirst"
        onChange={props.handleInputChange}
        type="text"
        placeholder="First Name"
      />
      <input
        value={props.nameLast}
        name="nameLast"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Last Name"
      />
      <input
        value={props.locationCity}
        name="locationCity"
        onChange={props.handleInputChange}
        type="text"
        placeholder="City"
      />
      <input
        value={props.locationState}
        name="locationState"
        onChange={props.handleInputChange}
        type="text"
        placeholder="State"
      />
      <button onClick={props.handleFormSubmit}>Submit</button>
    </form>
  );
}

export default Form;
