import React from "react";

export default function Header() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Welcome to your Employee Directory. If you would like to find out more
          about your employees, please use the search bar. You also have the
          ability to sort your employees by first or last name and nationaliy.
        </p>
      </div>
    </div>
  );
}
