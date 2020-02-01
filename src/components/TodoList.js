import React from 'react';
import TodoItem from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
 
const icon = <FontAwesomeIcon icon={faExclamation} id="exclamation" />

export const TodoList = ({todos}) => {
  
  return (
    <div id="list" className="list">
      <div className="todoListern">
      <div className="todoText">
      {  
        todos.map(item => <TodoItem title={item.title} key={item.id} />)
      }
      {icon} {icon}
      
      </div>
      <div className="addBlock col-12">
        <input type="text" id="addInput" placeholder="What needs to be done?" />
        <button id="add">ADD</button>                
      </div>
      </div>
    </div>
  );    
};
