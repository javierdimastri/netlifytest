import React, {useState} from 'react';
import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React connect to github",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo with netlify",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div
  className = "todo-list" >
    < TodoList
  todos = {todos}
  completeTodo = {completeTodo}
  removeTodo = {removeTodo}
  />
  < TodoForm
  addTodo = {addTodo}
  />
  </div>
)
  ;
};

export default TodoContainer;
