import { render } from "react-dom";
//import "./styles.css";
import React from "react";
import AppHeader from "./components/header";
import ToDoList from "./components/toDoList";
import ToDoInput from "./components/toDoInput";
import DoneList from "./components/doneList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //toDoArray: ["Make a cofee", "Eat pizza"],
      toDoArray: ["Make a cofee", "Eat pizza"],
      doneArray: ["Learn React"]
    };
  }

  onAddTask = (evt) => {
    if (evt.key === "Enter") {
      console.log(evt.target.value);
      this.setState({
        toDoArray: [...this.state.toDoArray, evt.target.value]
      });
      evt.target.value = "";
    }
  };

  onMoveToToDo = (elem, idx) => {
    this.state.toDoArray.push(elem);
    this.state.doneArray.pop(elem);
    this.setState({
      doneArray: this.state.doneArray, //this.state.doneArray.filter((item, id) => id !== idx),
      toDoArray: this.state.toDoArray
    });
  };

  onMoveToDone = (elem, idx) => {
    this.state.doneArray.push(elem);
    this.state.toDoArray.pop(elem);
    this.setState({
      doneArray: this.state.doneArray, //[...this.state.doneArray, elem],
      toDoArray: this.state.toDoArray //this.state.toDoArray.filter((item, id) => id !== idx)
    });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <ToDoInput onAddTask={this.onAddTask} />
        <ToDoList
          toDoList={this.state.toDoArray}
          onMoveToDone={this.onMoveToDone}
        />
        <DoneList
          doneList={this.state.doneArray}
          onMoveToToDo={this.onMoveToToDo}
        />
      </div>
    );
  }
}
