import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { increament, decreament, setValue } from "./features/CounterSlice"

function App() {
  const { count, getTodos } = useSelector(state => {
    console.log('selector', { state })
    return state
  })
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>value {count}</h1>
        <div style={{ display: "flex" }}>
          {/* <input type="number" onChange={(e) => {
            setV(e.target.value)
          }} /> */}

          <button onClick={() => {
            dispatch(increament())
          }}>+</button>
          {/* <button onClick={() => {

            dispatch(setValue(init))
          }}>set</button> */}
          <button onClick={() => {
            dispatch(decreament())
          }}>-</button>
        </div>
      </header>
      <ul>
        {
          getTodos.todos.map((item) => {
            return <li>{item.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
