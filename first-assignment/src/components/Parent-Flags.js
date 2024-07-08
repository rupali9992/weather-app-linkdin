import React, { useState } from "react";
import Child_Flags from "./Child-Flags";

export default function Parent_Flags() {
  var [text, setText] = useState("");
  function myfun(ev) {
    setText(ev.target.value);
  }
  return (
    <div>
      <div className="container">
        <h1>Parent Component</h1>
        <input type="text" onBlur={myfun} />

        {text}
        <hr />
        <Child_Flags p1={text} />
      </div>
    </div>
  );
}
