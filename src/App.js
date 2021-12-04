import { render } from "react-dom";
//import "./styles.css";
import React from "react";
import AppHeader from "./components/header";
import TaskList from "./components/TaskList";
import ToDoInput from "./components/ToDoInput";
import { nanoid } from "nanoid"; //generowanie id

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoArray: [
        { id: nanoid(), text: "Make a cofee" },
        { id: nanoid(), text: "Eat pizza" }
      ],
      doneArray: [{ id: nanoid(), text: "Learn React" }]
    };
  }

  createNewToDo = (todoText) => ({
    id: nanoid(),
    text: todoText
  });

  onAddTask = (evt) => {
    if (evt.key === "Enter") {
      console.log(evt.target.value);
      this.setState({
        toDoArray: [
          ...this.state.toDoArray,
          this.createNewToDo(evt.target.value)
        ]
      });
      evt.target.value = "";
    }
  };

  onMoveToToDo = (item) => {
    this.setState({
      doneArray: this.state.doneArray.filter((i) => i.id !== item.id),
      toDoArray: [...this.state.toDoArray, item] //this.state.toDoArray.concat(item)
    });
  };

  onMoveToDone = (item) => {
    this.setState({
      doneArray: [...this.state.doneArray, item],
      toDoArray: this.state.toDoArray.filter((i) => i.id !== item.id)
    });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <ToDoInput onAddTask={this.onAddTask} />
        <TaskList
          name="toDoList"
          title="To do:"
          isChecked=""
          itemList={this.state.toDoArray}
          onMoveToAnotherList={this.onMoveToDone}
        />
        <TaskList
          name="doneList"
          title="Done:"
          isChecked="yes"
          itemList={this.state.doneArray}
          onMoveToAnotherList={this.onMoveToToDo}
        />
      </div>
    );
  }
}
