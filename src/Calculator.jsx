import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(null);

  const calculate = () => {
    // Create a new Web Worker
    const worker = new Worker("./src/calculation-worker.js");

    // Define what to do when the worker sends a message
    worker.onmessage = function (e) {
      const { data } = e;
      setResult(data);
      worker.terminate();
    };

    // Start the calculation in the worker
    worker.postMessage(10);
  };

  return (
    <div>
      <button onClick={calculate}>Start Calculation</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Calculator;
