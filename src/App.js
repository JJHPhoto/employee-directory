import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
// import employees from "./employees.json";
// import Card from "./components/Card";
// import Search from "./components/Search";

class App extends React.Component {
  state = {
    users: [
      {
        gender: "male",
        name: { title: "Mr", first: "Otto", last: "Luoma" },
        location: {
          street: { number: 4583, name: "Visiokatu" },
          city: "Lumparland",
          state: "North Karelia",
          country: "Finland",
          postcode: 56644,
          coordinates: { latitude: "-12.9381", longitude: "-160.1107" },
          timezone: {
            offset: "-7:00",
            description: "Mountain Time (US & Canada)",
          },
        },
        email: "otto.luoma@example.com",
        login: {
          uuid: "b837f758-26a2-4884-8dfe-4f974ec3592c",
          username: "yellowtiger330",
          password: "sites",
          salt: "kAQjFGrb",
          md5: "cfdec44d4bfac7515bb24c1051f951c0",
          sha1: "2d658a4a2baa00525ee8748cdcc0c5ed3b760cf5",
          sha256:
            "35ff45275983aa0d4527bc5fd6769090e0a24851865dbe204da8ad71cd91cad1",
        },
        dob: { date: "1997-08-27T00:17:17.919Z", age: 24 },
        registered: { date: "2012-02-27T07:56:00.977Z", age: 9 },
        phone: "04-971-361",
        cell: "047-011-14-87",
        id: { name: "HETU", value: "NaNNA731undefined" },
        picture: {
          large: "https://randomuser.me/api/portraits/men/49.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        },
        nat: "FI",
      },
      {
        gender: "female",
        name: { title: "Ms", first: "Ava", last: "Wong" },
        location: {
          street: { number: 6703, name: "Grand Marais Ave" },
          city: "Oakville",
          state: "Québec",
          country: "Canada",
          postcode: "Z5E 0O7",
          coordinates: { latitude: "-85.3727", longitude: "-108.4056" },
          timezone: {
            offset: "+6:00",
            description: "Almaty, Dhaka, Colombo",
          },
        },
        email: "ava.wong@example.com",
        login: {
          uuid: "227ebb51-2a3f-4eca-8ad0-c1bd9bd3f23c",
          username: "blackduck777",
          password: "waffle",
          salt: "XgRZLT1o",
          md5: "e0bd73b122145d27b0d8bb2021209e4b",
          sha1: "632a3007c46144dd443c685947cd8561ab0bc6ee",
          sha256:
            "0059720fbafbf52f1d7f996f3a9de66efb929cb52d8585de5f295f2564d81f9d",
        },
        dob: { date: "1952-06-22T01:17:00.429Z", age: 69 },
        registered: { date: "2011-11-26T21:27:07.157Z", age: 10 },
        phone: "496-627-5446",
        cell: "893-240-2443",
        id: { name: "", value: null },
        picture: {
          large: "https://randomuser.me/api/portraits/women/89.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
        },
        nat: "CA",
      },
      {
        gender: "female",
        name: { title: "Mrs", first: "Lily", last: "Edwards" },
        location: {
          street: { number: 4412, name: "Queen Elizabeth Ii Drive" },
          city: "Invercargill",
          state: "Waikato",
          country: "New Zealand",
          postcode: 16242,
          coordinates: { latitude: "-63.9708", longitude: "19.0654" },
          timezone: { offset: "+3:30", description: "Tehran" },
        },
        email: "lily.edwards@example.com",
        login: {
          uuid: "e7f9a4b9-77ae-4f44-a037-65f8218cdb92",
          username: "ticklishdog484",
          password: "bearcat",
          salt: "JU1H7GSS",
          md5: "a916ce7c139401b17456c81335f61da0",
          sha1: "5b6e11065e8d3da9972c1fb4778548897df21e92",
          sha256:
            "3ac4da09e244e63ed0df9890d8fd7e777c7dacea828511ca953aa4b172ea5b7f",
        },
        dob: { date: "1978-12-29T21:12:00.140Z", age: 43 },
        registered: { date: "2007-04-16T10:29:41.168Z", age: 14 },
        phone: "(225)-973-9234",
        cell: "(663)-296-6620",
        id: { name: "", value: null },
        picture: {
          large: "https://randomuser.me/api/portraits/women/33.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
        },
        nat: "NZ",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Body users={this.state.users} />
      </div>
    );
  }
}

export default App;
