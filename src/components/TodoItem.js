import React from 'react';
import {users} from '../users.js';
import User from './User';

function TodoItem(props) {
const user = users.find(one => one.id === props.userId)
  return (
    <tr style={props.completed ? {background:'rgba(69, 169, 21, 0.15)'} : {background:'rgba(253, 106, 96, 0.29)'}}>
      <td>{props.title}</td>
      <User username={user.username} email={user.email}/>
      <td>{props.completed.toString()}</td>
    </tr>
  )
}

export default TodoItem;
