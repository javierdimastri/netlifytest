import React, {useState} from 'react';

const TodoForm = (props) => {
  const [value, setValue] = useState("");
  const {addTodo} = props;

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleChange = event => {
    const {target: {value}} = event;
    setValue(value)
  }

  return (
    <form
  onSubmit = {handleSubmit} >
    < input
  type = "text"
  className = "input"
  value = {value}
  onChange = {handleChange}
  />
  </form>
)
  ;
};

export default TodoForm;
