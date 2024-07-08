import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

export default function Child_Flags(props) {
  var [flags, setFlags] = useState([]);
  useEffect(() => {
    console.log("useEffect called-Child-Flags", props.p1);
    fetch("https://restcountries.com/v3.1/name/" + props.p1)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFlags(json);
      });
  }, [props.p1]);

  return (
    <div>
      {/* <h1>Child Component,{props.p1}</h1> */}
      <div className="container">
        <div className="row">
          {flags &&
            flags.length > 0 &&
            flags.map((obj) => (
              <Col
                xs={3}
                className="border p-2"
                border="info"
                style={{ width: "18rem" }}
              >
                <img src={obj.flags.png} className="img-fluid" />
                <h4 className="pt-3 text-center">{obj.name.common}</h4>
              </Col>
            ))}
        </div>
      </div>
    </div>
  );
}
// 1a986f69ba609f66d0f4f676cb8b807f
// api.openweathermap.org/data/2.5/forecast?q={props.w1}&appid=1a986f69ba609f66d0f4f676cb8b807f
