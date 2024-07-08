import React, { useState } from "react";
// import Child from "./Child";
import P2 from "./P2";

export default function Parent() {
  var [data, setdata] = useState('');
  const receiveInputValue = (inputValue) => {
    console.log("Received input value from child:", inputValue);
    setdata(inputValue);
  };

  return (
    <div className="container">
      <h1>Parent Component {data}</h1>
      <P2 passtoParent={receiveInputValue}  />
    </div>
  );
}
