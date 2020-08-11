import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/reducers'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <TodoItem dispatch={dispatch} />
      <TodoList list={todoState} dispatch={dispatch} />
    </div>
  );
}

export default App;
