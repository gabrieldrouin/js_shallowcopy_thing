import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const obj = {
    animals: {
      dog: "woof",
      cat: "meow",
    },
    food: "apple",
  };

  console.log("Original obj:", obj);

  // Create a new object with a new nested animals object
  const newobj = {
    ...obj,
    animals: { ...obj.animals },
  };

  console.log("New obj before changes:", structuredClone(newobj));

  newobj.food = "pie";
  console.log("New obj after changing food:", newobj);

  newobj.animals.cat = "boing";
  console.log("New obj after changing animals.cat:", newobj);

  console.log("Original obj after all changes:", obj); // Ensure the original obj is not modified

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
