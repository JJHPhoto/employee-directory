import React from "react";

export default function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search for employee</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type name"
          id="search"
        />
      </div>
    </form>
  );
}
