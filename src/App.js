import React, { useState, useReducer } from "react";
import "./App.css";
import Todo from "./Todo.js";
import styled from "styled-components";

export const Actions = {
  AddToDo: "addToDo",
  ToggleToComplete: "toggleToComplete",
  DeleteToDo: "deleteToDo",
};

function reducer(todo, action) {
  switch (action.type) {
    case Actions.AddToDo:
      return [...todo, newTodo(action.payload.todoData)];
    case Actions.ToggleToComplete:
      return todo.map((singleTodo) => {
        if (singleTodo.id === action.payload.id) {
          return { ...todo, complete: !singleTodo.complete };
        }
        return singleTodo;
      });
    case Actions.DeleteToDo:
      return todo.filter((singleTodo) => singleTodo.id !== action.payload.id);
    default:
      return todo;
  }
}

function newTodo(data) {
  return { id: Date.now(), data: data, complete: false };
}
function App() {
  const [todoData, setTodoData] = useState("");
  const [todo, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Actions.AddToDo, payload: { todoData: todoData } });
    setTodoData("");
  };
  return (
    <React.Fragment>
      <form className="App" onSubmit={handleSubmit}>
        <h1>Wel come</h1>
        <h2>Todo App</h2>
        <div>
          <Input
            type="text"
            value={todoData}
            onChange={(e) => setTodoData(e.target.value)}
            placeholder="Add Your List"
            autoFocus
          />
        </div>
      </form>
      <div>
        {todo.map((singleTodo, index) => {
          return <Todo key={index} todoObj={singleTodo} dispatch={dispatch} />;
        })}
      </div>
    </React.Fragment>
  );
}

const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
`;

export default App;
