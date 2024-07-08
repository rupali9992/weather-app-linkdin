import React, { useState } from 'react';

export default function Group() {
  var [data, setdata] = useState("");
  function add() {
    if (data != "") {
      fetch("http://localhost:9000/Groups", {
        method: "POST",
        body: JSON.stringify({ GroupName: data }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
       if (data == "") {
         document.querySelector(".para").innerHTML = "Please Add groupName";
       } else {
         document.querySelector(".para").innerHTML =
           "Group has been Added";
       }
  }
  return (
    <div className="container">
      <input type="text" className="form-control" placeholder="Add a Friends" onChange={(ev)=>{setdata(ev.target.value)}} />
      <hr />
      <button className="btn btn-primary" onClick={add}>Add</button>
      <p className='para'></p>
    </div>
  );
}
