import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../Header";
import Body from "../Body";
import SearchForm from "../SearchForm";
import Filters from "../Filters";

class SetStateContainer extends Component {
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

  filterFirstName = () => {
    const employeeList = this.state.users;
    const sortedList = employeeList.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    this.setState({
      employees: sortedList,
    });
  };

  filterLastName = () => {
    const employeeList = this.state.users;
    const sortedList = employeeList.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
    this.setState({
      employees: sortedList,
    });
  };

  filterNat = () => {
    const employeeList = this.state.users;
    const sortedList = employeeList.sort((a, b) => {
      if (a.nat < b.nat) {
        return -1;
      }
      if (a.nat > b.nat) {
        return 1;
      }
      return 0;
    });
    this.setState({
      employees: sortedList,
    });
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
        <Filters
          sort={this.state.sort}
          filterFirstName={this.filterFirstName}
          filterLastName={this.filterLastName}
          filterNat={this.filterNat}
        />
        <Body
          users={this.state.users}
          searchedUsers={this.state.searchedUsers}
        />
      </div>
    );
  }
}

export default SetStateContainer;
