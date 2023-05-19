import React, { useState } from 'react';
import TodoForm from './ToDoForm';
import Todo from './ToDo'
import { EditTodoForm } from './EditToDoForm';
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(1);
  const addTodo = (todo) => {
    const newTodo = {
      id: counter,
      task: todo,
      completed: false,
      isEditing: false
    };
    setTodos([...todos, newTodo]);
    setCounter(counter + 1);
    console.log(todos);
  };
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, isEditing: !todo.isEditing} : todo))
  }
  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='TodoWrapper'>
      <h2>ToDo List</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ):(
        <Todo task={todo} key={index}
        toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  );
};
export default TodoWrapper;