import React, { useEffect, useState } from "react";
import { useDebounce, useArray } from "./utils/index";
import "./App.css";

interface Person {
  name: string;
  age: number;
  sex?: string;
}

function App() {
  const [value, setValue] = useState("");
  const inputValue = useDebounce(value, 500);
  const person: Person[] = [{ name: "张三", age: 14 }];
  const { value: arrValue, clear, add, removeIndex } = useArray(person);

  useEffect(() => {
    console.log(inputValue, "变化了");
  }, [inputValue]);

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target?.value)}
      />
      <button onClick={() => add({ name: `${arrValue.length}里斯`, age: 19 })}>
        add
      </button>
      <button onClick={() => clear()}>clear</button>
      <button onClick={() => removeIndex(0)}>removeIndex</button>
      <ul>
        {arrValue.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
