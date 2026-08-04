/*
used it changes automatically.
*/

import { useState } from "react";

function Click() {
  /*
    const [name,set<name>]=useState([initial value])
    const [@param1,@param2]=useSTate(@inititalState<starting state>)
    @param1->the current state:<initger,array>
    @param2-> function to update the statate..
      @param2(newState)->
   */
  const [n, setN] = useState(0);

  const increment = () => {
    const newN = n + 1;
    setN(newN); //setN(n+1)
  };

  const decrement = () => {
    setN(n - 1);
  };

  const spoil = () => {
    setN("Cats and dogs"); //
  };

  const reset = () => {
    setN(0);
  };

  return (
    <div>
      <h4>Clicked {n}</h4>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement </button>
        <button onClick={spoil}>Spoil </button>
        <button onClick={reset}>Reset </button>
      </div>
      <h4>Clicked {n}</h4>
    </div>
  );
}

export default Click;