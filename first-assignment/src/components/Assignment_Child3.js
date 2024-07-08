import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
export default function Assignment_Child3(props) {
  var [flags, setFlags] = useState([]);

  useEffect(() => {
    console.log("useeffect is called");
    fetch(`https://fakestoreapi.com/products/category/${props.x2}`)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);

        setFlags(data);

      });
  }, [props.x2]);

  return (
    <div>
      <div className="col-9">
        <div className="row">
          {" "}
          {flags &&
            flags.length > 0 &&
            flags.map((obj) => (
              <Col
                xs={3}
                className="border p-2 text-center fetchdata"
                border="info"
              >
                <img src={obj.image} className="img-fluid" />
                <h4 className="pt-3 text-center">{obj.category}</h4>
                <p>{obj.title}</p>
                <h5>Price: {obj.price}</h5>
              </Col>
            ))}
        </div>
      </div>
    </div>
  );
}
