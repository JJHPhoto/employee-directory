import React from "react";
import API from "./utils/API";
import Body from "./components/Body";
import Header from "./components/Header";
import Search from "./components/Search";
// import employees from "./employees.json";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    API.getUsers()
      .then((employee) => {
        this.setState({ users: employee.data.results });
      })
      .catch((err) => console.log(err));
  }

  // save for later
  // handleInputChange = (event) => {
  //   const [name, value] = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Body users={this.state.users} />
      </div>
    );
  }
}

export default App;
