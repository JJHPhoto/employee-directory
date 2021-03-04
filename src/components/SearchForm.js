import React from "react";

export default function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search for employee</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type name"
          id="search"
        />
      </div>
    </form>
  );
}

// import React from "react";

// function SearchForm() {
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
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="search">Search for employee</label>
//         <input
//           onChange={this.state.handleInputChange}
//           value={this.state.search}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Type name"
//           id="search"
//         />
//       </div>
//     </form>
//   );
// }

// export default SearchForm;
