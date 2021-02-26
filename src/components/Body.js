import React from "react";

export default function Body({ users, searchedUsers }) {
  const userList = searchedUsers || users;
  console.log("1111", searchedUsers, users);
  console.log("2222", userList);
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">Employees</h5>
        {userList
          .filter((user) => {
            return true;
          })

          .map((user) => (
            <div>
              <p className="card-text">
                {user.name.first + " "}
                {user.name.last}
              </p>
              <img src={user.picture.large} alt="profile"></img>
            </div>
          ))}
      </div>
    </div>
  );
}
