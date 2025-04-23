import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World!</h1>

      <p>Let's transform some code!</p>

      <div className="card">
        <button
          onClick={() => {
            setCount((count) => {
              const nextCount = count + 1;
              console.log(`count is ${nextCount}`);
              return nextCount;
            });
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
