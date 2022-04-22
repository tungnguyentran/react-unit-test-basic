import logo from './logo.svg';
import './App.css';
import Foo from './Foo';
import { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div id="count">Count : {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          props.onChange(count + 1);
        }}
        id="buttonClick"
      >Click me</button>
    </div>
    
  );
}

export default App;
