import { React, useContext } from 'react'
import TodoContext from '../TodoContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


/*
 * Todo
 * Props: todo
 * State: none
 * context : functions -->> deleteTodo, toggleTodo, editTodo
 * App ---> TodoList ---> Todo
 */ 

const Todo = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);
return (
    <Stack direction="horizontal" gap={2} className="col-sm-12 col-md-12 col-lg-12 justify-content-start" style={{marginTop:10}}>
      <Button
        variant="danger"
        onClick={()=>deleteTodo(todo.id)}
      size="sm"
      style={{
        marginLeft: '-15px'
      }}
      >
        Delete
      </Button>
      <Button
        variant="success"
        onClick={()=>editTodo(todo)}
        size="sm"
      >
        Edit
      </Button>
      <Form.Check
        type="checkbox"
        onClick={()=>toggleTodo(todo.id)}
        defaultChecked={todo.completed}
      />
      <li
        style={{
          textDecoration: todo.completed ?
            'line-through' : null,
        color: todo.completed ? "darkgrey" : "white",
          
        }}
      >
        {todo.task}
      </li>
    </Stack>

  )
}

export default Todo