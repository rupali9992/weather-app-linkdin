import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
export default function Flags() {
  var [Flags, setFlags] = useState([]);
  useEffect(() => {
    console.log("useEffect called-Flags");
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFlags(json);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center">Flags Component</h1>
      <div className="Container">
        <div className="row">
          {Flags &&
            Flags.length > 0 &&
            Flags.map((values) => (
              <Col xs={3}>
                <img src={values.flags.png} className="img-fluid" />
                <h4>{values.name.common}</h4>
              </Col>
            ))}
        </div>
      </div>
    </div>
  );
}
