import React from "react";
import API from "./utils/API";
import Body from "./components/Body";
import Header from "./components/Header";
import Search from "./components/Search";
// import Card from "./components/Card";

class App extends React.Component {
  // create search component out of all this?
  state = {
    search: "",
    users: [],
    searchedUsers: [],
  };

  componentDidMount() {
    this.getUsers(" ");
  }

  getUsers = (query) => {
    API.search(query)
      .then((employee) => {
        this.setState({
          users: employee.data.results,
          searchedUsers: employee.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    const searchedEmployees = this.state.searchedUsers.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(value.toLowerCase()) ||
        user.name.last.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({ users: searchedEmployees });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getUsers(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Body users={this.state.users} />
      </div>
    );
  }
}

export default App;
