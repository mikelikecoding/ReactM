import React from "react";
import { useState } from "react";

let globalId = 0;

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // let listId = 0;

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  function deleteItem(itemID){
     setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  return (
    <div>
      <h1>My Practice todo List</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Create List</button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo} </li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
