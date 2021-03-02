import React from "react";

export default function Filters(props) {
  return (
    <div className="card-bod">
      <form>
        <div className="form-group">
          <label htmlFor="filterName">Sort</label>
          <input
            type="file"
            className="form-control"
            name="sort"
            id="filterName"
          />
        </div>
      </form>
    </div>
  );
}
