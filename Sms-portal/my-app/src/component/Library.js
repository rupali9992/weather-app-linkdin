import React, { useState } from 'react';

export default function Library() {
  var [data, setdata] = useState("");
  function add() {
    if (data != '') {
      fetch("http://localhost:9000/Libraries", {
        method: "POST",
        body: JSON.stringify({ libName: data }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans);
        });
    }
    
   if (data =='') {
     document.querySelector('.para').innerHTML = 'Add library';
    } 
   else {
     document.querySelector('.para').innerHTML = " Library has been Added";
   }
      

    }

  return (
    <div className='container'>
      <input type='text' className='form-control' placeholder='Add a Library' onChange={(ev)=>{setdata(ev.target.value)}}/>
      <hr />
     
      <button className='btn btn-primary' onClick={add}>Add</button>
      <br />
      <br/>
      <p className='para'>...</p>
    </div>
  );
}
