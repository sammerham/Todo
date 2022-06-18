import React, { useState } from 'react';
import LocalStorageState from './hooks/LocalStorageState';
import TodoContext from './TodoContext';
import AddTodoForm from './components/AddTodoForm';
import TodosList from './components/TodosList';
import './App.css';
import EditTodoForm from './components/EditTodoForm';


/*
 * App
 * Props: none
 * State: todos ---> [{task:"", id:"", completed:false}, ...]
 *        isEditing ---->> boolean (true, false)
 *        currentTodo --->> {task:"", id:"", completed:false}
 *
 * App ---> TodoForm
 *          TodoList ---> Todo ----> EditTodoForm
 *
 */


function App() {
  const [todos, setTodos] = LocalStorageState('todos', []);
  const [isEditting, setIsEditting] = useState(false);
  const [currTodo, setCurrTodo] = useState(null);
  
  
  // fn to add a todo to main todo list
  const addTodo = todo => {
    setTodos(todos => [
      ...todos,
      {
        task:todo,
        id: new Date().getTime(),
        completed: false
      }
    ]);
  };

// fn to delete todo from main todo list by id;
  const deleteTodo = id => setTodos(todos => todos.filter(todo => todo.id !== id));

  // fn edit todo by id;
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          task: updatedTodo
        }
      }
      return todo;
    }));
    setIsEditting(false)
  };


//fn to edit todo task
  const editTodo = (todo) => {
    setCurrTodo(todo)
    setIsEditting(true)
  };

  // fn to cancel Editing todo
  const cancelEditTodo = () => setIsEditting(false);

  // fn toggle todo
  const toggleTodo = id => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  };


  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      deleteTodo,
      updateTodo,
      toggleTodo,
      editTodo,
      cancelEditTodo,
      currTodo
    }}>
      <div className="App-header">
        <h1> Todo App </h1> 
        <br />
        <div className='todoList'>
          {isEditting ?
          <EditTodoForm />
          :
          <>
            <AddTodoForm />
            <br />
            <TodosList />
          </>
       }
        </div>
        
      </div>
    </TodoContext.Provider>
  );
}

export default App;
