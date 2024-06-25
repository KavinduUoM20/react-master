import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  //let counter = 15;

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Tutorial {counter}</h1>
      <h3>React Tutorial {counter}</h3>
      <button onClick={addValue}>Click Me! {counter}</button>
      <button onClick={removeValue}>Click Me! {counter}</button>
    </>
  );
}

export default App;
