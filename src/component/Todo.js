import React from 'react';
import {Button} from 'antd'

const Todo = (props) => {
  const {todo, index, completeTodo, removeTodo} = props;
  const clickComplete = () => {
    completeTodo(index);
  }
  const clickRemove = () => {
    removeTodo(index);
  }
  return (
    < div
  className = "todo"
  style = {
  {
    textDecoration: todo.isCompleted ? "line-through" : ""
  }
}
>
  {
    todo.text
  }
<
  div >
  < Button
  type = 'primary'
  onClick = {clickComplete} > Complete < /Button>
    < Button
  onClick = {clickRemove} > x < /Button>
    < /div>
    < /div>
)
  ;
};

export default Todo;
