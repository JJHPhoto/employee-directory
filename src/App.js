import React from "react";
import API from "./utils/API";
import Body from "./components/Body";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
// import Filters from "./components/Filters";
// import Card from "./components/Card";

class App extends React.Component {
  // create search component out of all this?
  state = {
    search: "",
    users: [],
    searchedUsers: null,
    sort: "",
  };

  componentDidMount() {
    this.getUsers(" ");
  }

  getUsers = () => {
    API.search()
      .then((employee) => {
        this.setState({
          users: employee.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      search: value,
    });

    const searchedEmployees = this.state.users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(value.toLowerCase()) ||
        user.name.last.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({ searchedUsers: searchedEmployees });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getUsers(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {/* <Filters sort={this.state.sort} /> */}
        <Body
          users={this.state.users}
          searchedUsers={this.state.searchedUsers}
        />
      </div>
    );
  }
}

export default App;
