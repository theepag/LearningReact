import React, { Component } from "react";

import "./App.css";
import Todos from "./components/Todos";
import counter from "./components/Counter";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with GF",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <counter />
      </div>
    );
  }
}

export default App;
