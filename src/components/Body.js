import React from "react";
import { CardColumns } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/Card";

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
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={user.picture.thumbnail}
                alt="profile"
              />
              <Card.Body>
                <Card.Title>
                  {user.name.first} {user.name.last}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Age: {user.dob.age}</ListGroupItem>
                <ListGroupItem>Email: {user.email}</ListGroupItem>
                <ListGroupItem>Nationality: {user.nat}</ListGroupItem>
              </ListGroup>
            </Card>
          ))}
      </div>
    </div>
  );
}
