import React from 'react';
import AppTitle from './components/AppTitle';
import AppSearch from './components/AppSearch';
import {TodoList} from './components/TodoList';
import './App.css';

function App() {
  const todos = [
    {id:0, title:'11111'},
    {id:1, title:'2222'},
    {id:2, title:'33333'}
  ]

  return (
    <div className="App">
      <AppTitle />
      <AppSearch />     
      <TodoList  todos={todos}/>
    </div>
  );
}

export default App;
