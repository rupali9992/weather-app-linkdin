import React, { useState } from "react";
import P3 from "./P3";

export default function P2({ passtoParent }) {
  const [inputValue, setValue] = useState("");

  const f2 = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={f2} />
    
      <hr />
      <P3 x1={inputValue} />
    </div>
  );
}
