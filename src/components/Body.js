import React from "react";

export default function Body({ users }) {
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">Employees</h5>
        {users
          .filter((user) => {
            return true;
          })

          .map((user) => (
            <p className="card-text">
              {user.name.first}
              {user.name.last}
            </p>
          ))}
      </div>
    </div>
  );
}
