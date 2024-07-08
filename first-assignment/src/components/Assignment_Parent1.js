import React, { Children, useEffect, useState } from 'react';
import Assignment_Child from './Assignment_Child';
import Assignment_Child3 from './Assignment_Child3';

export default function Assignment_Parent1() {
    var [rec, setRec] = useState('');

  function getDataFromChild(ChildData) {
      console.log("parent component function called", ChildData);
      setRec(ChildData);


  }
  return (
    <div className="container border ">
      <h1>Parent Component</h1>
      <hr />
          <Assignment_Child   x1={getDataFromChild} />
      <hr/>
          <Assignment_Child3 x2={rec} />
    </div>
  );
}
