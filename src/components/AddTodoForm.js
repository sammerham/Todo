import React, { useContext } from 'react'
import TodoContext from '../TodoContext';
import useFields from '../hooks/useFields'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/*
 * AddTodoForm
 * Props: none
 * State: none
 * Custom Hook : useFields
 * context : functions -->> addTodo
 * App ---> AddTodoForm
 */

const AddTodoForm = () => {
  const initialData = {
task:''
  }
  const [formData, handleChange, resetFormData] = useFields(initialData);
  const { addTodo } = useContext(TodoContext);
  
  
  // handleSubmit when form Submits
  const handleSubmit = e => {
    e.preventDefault();
    if (formData.task) { 
      addTodo(formData.task);
      resetFormData();
    }
  };


  return (
      
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
          <Form.Control
            type="text"
            name="task"
            id="task"
            placeholder="add your task here ...."
            value={formData.task}
            onChange={handleChange}
            />
          </Col>
          <Col xs="auto" >
            <Button
              variant="primary"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Col>
        </Row >
      </Form>

  )
}

export default AddTodoForm