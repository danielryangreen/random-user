import React from "react";

function Form(props) {
  return (
    <div>
      <h4>Filter by:</h4>
      <form className="form-row mb-3">
        <div className="col-sm-2">
          <label className="sr-only" htmlFor="nameFirst">First</label>
          <input
            value={props.nameFirst}
            name="nameFirst"
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            id="nameFirst"
            placeholder="First"
          />
        </div>
        <div className="col-sm-2">
          <label className="sr-only" htmlFor="nameLast">Last</label>
          <input
            value={props.nameLast}
            name="nameLast"
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            id="nameLast"
            placeholder="Last"
          />
        </div>
        <div className="col-sm-2">
          <label className="sr-only" htmlFor="locationCity">City</label>
          <input
            value={props.locationCity}
            name="locationCity"
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            id="locationCity"
            placeholder="City"
          />
        </div>
        <div className="col-sm-2">
          <label className="sr-only" htmlFor="locationState">State</label>
          <input
            value={props.locationState}
            name="locationState"
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            id="locationState"
            placeholder="State"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>Filter</button>
        </div>
      </form>
      <h4>Sort by:</h4>
      <div className="btn-group mb-5" role="group" aria-label="sort buttons">
        <button type="button" className="btn btn-outline-primary" onClick={props.sortNameFirst}>First</button>
        <button type="button" className="btn btn-outline-primary" onClick={props.sortNameLast}>Last</button>
        <button type="button" className="btn btn-outline-primary" onClick={props.sortLocationCity}>City</button>
        <button type="button" className="btn btn-outline-primary" onClick={props.sortLocationState}>State</button>
      </div>
    </div>
  );
}

export default Form;
