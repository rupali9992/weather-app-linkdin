import React, { useEffect, useState } from "react";
// import React from 'react';
import Col from "react-bootstrap/Col";


export default function P3(props) {
  var [flags, setFlags] = useState([]);
  useEffect(() => {
    console.log("useeffect is called");
    fetch("https://restcountries.com/v3.1/name/" + props.x1)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFlags(json);
      });
  }, [flags]);

  return (
    <div>
      <h1> P3 component, {props.x1}</h1>
      <div className="container">
        <div className="row">
          {flags &&
            flags.length > 0 &&
            flags.map((obj) => (
              <Col xs={3}>
                <img src={obj.flags.png} className="img-fluid" />
                <h4 className="pt-3 text-center">{obj.name.common}</h4>
              </Col>
            ))}
        </div>
      </div>
    </div>
  );
}
