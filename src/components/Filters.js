import React from "react";

export default function Filters() {
  return (
    <div className="card-bod">
      <form>
        <div className="form-group">
          <label htmlFor="filterName">Filter by Name</label>
          <input
            type="file"
            className="form-control"
            name="search"
            id="filterName"
          />
        </div>
      </form>
    </div>
  );
}
