import React, { useEffect, useRef, useState } from "react";

export default function AddMessage() {
  var [msg, setmsg] = useState([]);
  var x1 = useRef();
  var x2 = useRef();

  useEffect(() => {
    fetch("http://localhost:9000/Libraries")
      .then((res) => res.json())
      .then((ans) => {
        console.log(ans);
        setmsg(ans);
      });
  }, []);
  function add() {
    console.log(x1.current.value);
    console.log(x2.current.value);
    var obj = {
      libid: x1.current.value,
      message: x2.current.value,
    };
    console.log(obj);
    if (msg != "") {
      fetch("http://localhost:9000/Messages", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans);
        });
    }  if (x2.current.value == "") {
      document.querySelector('.para').innerHTML = 'please add a message';
    }
    else {
      document.querySelector(".para").innerHTML = "Message has been Added";
    }
  }
  return (
    <div className="container">
      <select ref={x1} className="form-control">
        <option>please select Library</option>
        {msg &&
          msg.length > 0 &&
          msg.map((obj) => <option value={obj.id}>{obj.libName}</option>)}
      </select>
      <br />

      <textarea
        ref={x2}
        className="form-control"
        placeholder="Enter Message"
      ></textarea>
      <br />
      <button className="btn btn-primary" onClick={add}>
        Add
      </button>
      <br />
      <p className="para"></p>
    </div>
  );
}
