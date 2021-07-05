import { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter Value = {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increatment
      </button>
    </div>
  );
};
