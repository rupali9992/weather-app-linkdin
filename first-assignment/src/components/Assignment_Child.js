import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function Assignment_Child(props) {
  function f1(ev) {
    console.log(ev.target.value);
    console.log(typeof props.x1);
    props.x1(ev.target.value);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" onChange={f1} />
        </div>
      </div>


      {/* <input type="text" onChange={f1} /> */}
    </div>
  );
}
