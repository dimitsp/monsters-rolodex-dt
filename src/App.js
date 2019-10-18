import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Cardlist } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    // states  passing down as props
    this.state = {
      monsters: [],
      searchField: ""
    };

    //we use arrow function to bind this
    //this.handleChange = this.handleChange.bind(this);
  }

  //when reactrenders form a first time after that run the code in the braces
  componentDidMount() {
    // api request (promse) to json object
    fetch("https://jsonplaceholder.typicode.com/users")
      //response of thr body i jason format
      .then(response => response.json())
      //set the arr of users to the monsters arr of obj
      .then(users => this.setState({ monsters: users }));
  }

  //synthetic event we want to use the search box multiple times
  //if we want to change something in hanhlechange is better to change
  // in one place
  //arrow function leksikli scope
  handleChange = e => {
    // we have to bind this couse we get an error
    //or use arrow function couse automaticly bind thid in ther where called
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* we need something to represent input */}
        <SearchBox
          placeholder="search monsters"
          // we have to bind this couse we gat an error
          handleChange={this.handleChange}
        />
        {/* childern are the props/info between the tags  */}
        {/* we have to move the code in card-list comp */}
        {/* passing as props the state of monster arr */}
        <Cardlist monsters={filteredMonsters} />

        {/* with curlsie braces we render javascript and not jsx */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
