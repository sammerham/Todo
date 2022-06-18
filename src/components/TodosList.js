import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import Todo from './Todo';


/*
 * TodoList
 * Props: None
 * State: none
 * context : todos  [{task:"", id:"", completed:false}, ....]
 * App ---> TodoList
 */

const TodosList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <ul style={{listStyle:"none"}}>
        {todos?.map(todo => (
            <Todo key={todo.id} todo={todo}/>
          
        ))}
      </ul>
    </div>
  )
}

export default TodosList