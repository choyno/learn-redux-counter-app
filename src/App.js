import React from 'react';
import './App.css';
import {useSelector, useDispatch}  from 'react-redux';

import {increment, decrement} from './actions';

function App() {
  const counter = useSelector( state => state.counter);
  const isLogged = useSelector( state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment(5)) }>+</button>
      <button onClick={() => dispatch(decrement()) }>-</button>
      <br/>
      <br/>

      { isLogged ? <h2>Shoud Not See</h2> : "Not Logged in" }
    </div>
  );
}

export default App;
