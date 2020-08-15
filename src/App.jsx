import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
import VisibilityFilter from './components/visibilityFilters';
import {Provider} from 'react-redux'
import store from './redux/store';
import './App.css';

function App() {
  const filters = ['all', 'completed', 'incomplete']
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO List</h1>
        <AddTodo></AddTodo>
        <TodoList todos={[{content: 'Task 1'}, {content: 'Task 2'}]}/>
        <VisibilityFilter filters={filters}/>
      </div>
    </Provider>
  );
}

export default App;