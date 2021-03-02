import React from "react";

export default function Body({ users, searchedUsers }) {
  const userList = searchedUsers || users;
  // console.log("1111", searchedUsers, users);
  // console.log("2222", userList);
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">Employees</h5>
        {userList
          .filter((user) => {
            return true;
          })

          .map((user) => (
            //Put Filters compenent into thead?
            <div>
              <table className="table table-borderless">
                <thead>
                  {/* <tr>
                    <th scope="col"></th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                  </tr> */}
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={user.picture.large} alt="profile"></img>
                    </td>
                  </tr>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.email}</td>
                </tbody>
              </table>
              {/* <p className="card-text">
                {user.name.first + " "}
                {user.name.last}
              </p>
              <img src={user.picture.large} alt="profile"></img> */}
            </div>
          ))}
      </div>
    </div>
  );
}
