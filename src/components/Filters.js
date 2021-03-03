import React from "react";

export default function Filters(props) {
  return (
    <div className="card-bod">
      <h4>Sort by...</h4>
      <button
        onClick={props.sortEmployeesFirstName}
        classname="btn btn-primary mt-3"
      >
        First name
      </button>
      <button
        onClick={props.sortEmployeesLastName}
        classname="btn btn-primary mt-3"
      >
        Last name
      </button>
      <button
        onClick={props.sortEmployeesCountry}
        classname="btn btn-primary mt-3"
      >
        Nationality
      </button>
    </div>
  );
}
