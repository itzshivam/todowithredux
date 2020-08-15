import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
import VisibilityFilter from './components/visibilityFilters';

function App() {
  const filters = ['all', 'completed', 'incomplete']
  return (
    <div>
      <h1>TODO List</h1>
      <AddTodo></AddTodo>
      <TodoList todos={[{content: 'Task 1'}, {content: 'Task 2'}]}/>
      <VisibilityFilter filters={filters}/>
    </div>
  );
}

export default App;