import React from 'react';
import { useState } from "react";
import "./App.css"

function App() {
    const [count, setCount] = useState(0);

    const [but, setBut] = useState(false);

    const [text, setText] = useState("");

    const [hide, setHide] = useState(false);
  return (
    <>
      <div>

        <h1>Virtual dom</h1>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

      </div>

      <hr />

      <div>

      <h1>Toggle Button</h1>
      <button onClick={() => setBut(!but)}>{but ? "ON" : "OFF"}</button>

      </div>

      <hr />

      <div>

      <h2>Type SomeThing</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Here..."
      />
      <p>Your Typing {text}</p>

      </div>

      <hr />

      <div>

      <h2>Show/Hiden Text</h2>
      <button onClick={() => setHide(!hide)}>
        {hide ? "Hide" : "Show"}Text
      </button>
      {hide && <p>This can be hidden or show!</p>}

      </div>

      <button>Hello World!</button>

    </>
  );
}

export default App