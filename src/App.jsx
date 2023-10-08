import { useState } from "react";
import "./App.css";
import Calculator from "./Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Web Worker Calculation Demo</h1>
      <Calculator />
    </>
  );
}

export default App;
