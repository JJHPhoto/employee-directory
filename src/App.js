import React from "react";
import API from "./utils/API";
import Body from "./components/Body/index";
import SearchForm from "./components/SearchForm";
import Filters from "./components/Filters";
import SetState from "./components/SetState";

// class App extends React.Component {
//   // create search component out of all this?
//   state = {
//     search: "",
//     users: [],
//     searchedUsers: null,
//     sort: "",
//   };

//   componentDidMount() {
//     this.getUsers(" ");
//   }

//   getUsers = () => {
//     API.search()
//       .then((employee) => {
//         this.setState({
//           users: employee.data.results,
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   handleInputChange = (event) => {
//     const { value } = event.target;
//     console.log(value);
//     this.setState({
//       search: value,
//     });

//     const searchedEmployees = this.state.users.filter((user) => {
//       return (
//         user.name.first.toLowerCase().includes(value.toLowerCase()) ||
//         user.name.last.toLowerCase().includes(value.toLowerCase())
//       );
//     });
//     this.setState({ searchedUsers: searchedEmployees });
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     this.getUsers(this.state.search);
//   };

//   //got from Danny
//   sortEmployeesFirstName = () => {
//     const employeeList = this.state.users;
//     const sortedList = employeeList.sort((a, b) => {
//       if (a.name.first < b.name.first) {
//         return -1;
//       }
//       if (a.name.first > b.name.first) {
//         return 1;
//       }
//       return 0;
//     });
//     this.setState({
//       employees: sortedList,
//     });
//   };

//   sortEmployeesLastName = () => {
//     const employeeList = this.state.users;
//     const sortedList = employeeList.sort((a, b) => {
//       if (a.name.last < b.name.last) {
//         return -1;
//       }
//       if (a.name.last > b.name.last) {
//         return 1;
//       }
//       return 0;
//     });
//     this.setState({
//       employees: sortedList,
//     });
//   };

//   sortEmployeesCountry = () => {
//     const employeeList = this.state.users;
//     const sortedList = employeeList.sort((a, b) => {
//       if (a.nat < b.nat) {
//         return -1;
//       }
//       if (a.nat > b.nat) {
//         return 1;
//       }
//       return 0;
//     });
//     this.setState({
//       employees: sortedList,
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <SearchForm
//           search={this.state.search}
//           handleFormSubmit={this.handleFormSubmit}
//           handleInputChange={this.handleInputChange}
//         />
//         <Filters
//           sort={this.state.users}
//           sortEmployeesFirstName={this.sortEmployeesFirstName}
//           sortEmployeesLastName={this.sortEmployeesLastName}
//           sortEmployeesCountry={this.sortEmployeesCountry}
//         />
//         <Body
//           users={this.state.users}
//           searchedUsers={this.state.searchedUsers}
//         />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="containter">
      <SetState />
    </div>
  );
}

export default App;
