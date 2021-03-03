import React from "react";

export default function Header() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          This is (company name)'s employee directory. You can search for an
          employee by name. You can also sort them by first & last names,
          country, age.{" "}
        </p>
      </div>
    </div>
  );
}
