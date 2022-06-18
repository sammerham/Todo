import React, { useContext } from 'react'
import TodoContext from '../TodoContext';
import useFields from '../hooks/useFields';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

/*
 * EditTodoForm
 * Props: none
 * State: none
 * Custom Hook : UseFeilds
 * context : functions -->> currentTodo, updateTodo, cancelediting
 * App ---> TodoList ---> TodoItem ----> EditTodoForm
 */

const EditTodoForm = () => {
  const { currTodo, updateTodo, cancelEditTodo } = useContext(TodoContext);
  const [formData, handleChange] = useFields(currTodo);
  

  // handleSubmit when form Submits
  const handleSubmit = e => {
    e.preventDefault();
    updateTodo(currTodo.id, formData.task);
  };


  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ paddingTop: 60 }}>
      <Stack direction="horizontal" gap={2}>
          <Form.Control
            type="text"
            name="task"
            id="task"
            placeholder={currTodo.task}
            value={formData.task}
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            variant="primary"
          >
            Update
          </Button>
          <Button
          onClick={cancelEditTodo}
            variant="danger"
          >
            Cancel
            </Button>
      </Stack>
    </Form>
    </div>
  )
}

export default EditTodoForm