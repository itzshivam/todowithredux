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
        <VisibilityFilter/>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;