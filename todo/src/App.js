import React from 'react';
import './App.css';
import { initialState, reducer } from '../reducers/reducers'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <TodoItem list={todoState} dispatch={dispatch} />
      <TodoList dispatch={dispatch} />
    </div>
  );
}

export default App;
