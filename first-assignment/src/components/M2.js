import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import useFetchData from "../CustomHooks/useFetchData";
import { useSerialIds } from "highcharts";
import M3 from "./M3";

export default function M2(props) {
  var [rec, setrec] = useState("hello");

  var ans = useFetchData("https://fakestoreapi.com/products/categories");
  console.log(ans);
  var f1 = (value) => {
    console.log(value);
    setrec(value);
    props.x2(value)
  };

  return (
    <div className="row list-item">
      
        {/* <h1>M2 </h1> */}
        {ans &&
          ans.length > 0 &&
          ans.map((value, index) => (
            <li key={index} onClick={() => f1(value)}>
              {value}
            </li>
          ))}
        
      </div>

  
  );
}

