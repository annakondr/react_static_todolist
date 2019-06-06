import React from 'react';
import {todos} from '../todos.js';
import TodoItem from './TodoItem.js';
import './TodoList.css';

function TodoList() {
const todoItemsList = [];
  todos.forEach((item) => {
    todoItemsList.push(<TodoItem title={item.title} completed={item.completed} userId={item.userId}/>)
  });

  return (
    <table>
      <thead>
        <th>ToDoItem</th>
        <th>User name</th>
        <th>Completed</th>
      </thead>
      <tbody>
        {todoItemsList}
      </tbody>
    </table>
  )
}

export default TodoList;
