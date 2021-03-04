import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/Card";

export default function Body({ users, searchedUsers }) {
  const userList = searchedUsers || users;
  // console.log("1111", searchedUsers, users);
  // console.log("2222", userList);
  return (
    <div className="container">
      <div className="card-body">
        <h5 className="card-title">Employees</h5>
        {userList
          .filter((user) => {
            return true;
          })

          .map((user) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={user.picture.large}
                alt="profile"
                rounded
              />
              <Card.Body>
                <Card.Title>
                  {user.name.first} {user.name.last}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Email: {user.email}</ListGroupItem>
                <ListGroupItem>Phone: {user.phone}</ListGroupItem>
                <ListGroupItem>Cell: {user.cell}</ListGroupItem>
                <ListGroupItem>Nationality: {user.nat}</ListGroupItem>
              </ListGroup>
            </Card>
          ))}
      </div>
    </div>
  );
}
