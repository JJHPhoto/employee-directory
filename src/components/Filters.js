import React from "react";

export default function Filters(props) {
  return (
    <div className="card-bod">
      <h4>Sort by...</h4>
      <button onClick={props.filterFirstName} className="btn btn-primary mt-3">
        First name
      </button>
      <button onClick={props.filterLastName} className="btn btn-primary mt-3">
        Last name
      </button>
      <button onClick={props.filterNat} className="btn btn-primary mt-3">
        Nationality
      </button>
    </div>
  );
}
