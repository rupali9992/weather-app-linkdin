import { useState } from "react";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function () {
  var [counter, setCounter] = useState(0);
  var [age, setage] = useState(0);

 

  useEffect(() => {
    console.log("useEffect use on page load", counter, age);
    return () => {
      console.log("useed effect called on leave");
    };
  }, []);

  return (
    <div className="container">
      <h1>useEffect Example</h1>

      <Button
        className="p-2"
        onClick={() => {
          setCounter(counter + 20);
        }}
      >
        Click
      </Button>{" "}
      {counter}
      <hr />
      <Button
        className="p-2"
        onClick={() => {
          setage(age + 5);
        }}
      >
        {" "}
        Click
      </Button>
      {age}
    </div>
  );
}
