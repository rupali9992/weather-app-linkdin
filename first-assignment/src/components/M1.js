import React, { useState } from 'react';
import M2 from './M2';
import M3 from './M3';

export default function M1() {
    var [data, setdata] = useState();
  function getDatafromChild(inputValue) {
    console.log("m2 called", inputValue);
    setdata(inputValue);
  }
  return (
    <div className="container">
      {/* <h1>Mi {data}</h1> */}
      <hr />
      <div className="row">
        <div className="col-3">
          <M2 x2={getDatafromChild} />
        </div>
        <div className="col-9">

          <M3 x3={data} />
        </div>
      </div>
    </div>
  );
}
