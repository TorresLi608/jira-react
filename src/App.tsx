import React, { useEffect, useState } from "react";
import { useDebounce } from "./utils/index";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const inputValue = useDebounce(value, 500);
  useEffect(() => {
    console.log(inputValue, "变化了");
  }, [inputValue]);
  return (
    <div className="App">
      {inputValue}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target?.value)}
      />
    </div>
  );
}

export default App;
