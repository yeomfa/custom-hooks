import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {
  // return JSON.parse( localStorage.getItem('todos') || []);
  return [];
}

export const useTodo = () => {

  const [ todos, dispatch] = useReducer(todoReducer, [], init); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] add todo',
      payload: todo,
    }

    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] delete todo',
      payload: id,
    }

    dispatch(action);
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] toggle todo',
      payload: id,
    }

    dispatch(action);
  }

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter( todo => !todo.done ).length;
  
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  }
}
