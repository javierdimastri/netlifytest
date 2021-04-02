import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {

  const {todos, completeTodo, removeTodo} = props;
  return (
    < div >
    {
      todos.map((todo, index) => (
        < Todo
      key = {index}
      index = {index}
      todo = {todo}
      completeTodo = {completeTodo}
      removeTodo = {removeTodo}
  />
))
}
</div>
)
  ;
};

export default TodoList;
