import React from "react";
import Search from "./Search";
// import Card from "./Card";

export default function Body({ users }) {
  return (
    <div>
      <Search />
      <div className="card-body">
        <h5 className="card-title">Employees</h5>
        {users.map((user) => (
          <p className="card-text">
            {user.name.first}
            {user.name.last}
          </p>
        ))}
      </div>
    </div>
  );
}

//   //create component for image?
//   {/* <div className="card" style={{ width: "18rem;" }}>
// <img src={users((user) => (<p className="card-img-top"> {user.picture.thumbnail}</p>))} */}
// //card component
// {/* <Card /> */}
