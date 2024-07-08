import React, { useEffect, useState } from 'react';
// import Col from 'react-bootstrap/esm/Col';
// import M4 from './M4
import Button from "react-bootstrap/Button";

export default function M3(props) {
     
    var [ans, setans] = useState([]);
    useEffect(() => {
      console.log("useEffect called -M4");
      fetch("https://fakestoreapi.com/products/category/" + props.x3)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setans(data);
        });
    }, [props.x3]);
    return (
      <div>
        {/* <h1>M3 {props.x3}</h1> */}
        <div className="row">
          {ans &&
            ans.length > 0 &&
            ans.map((value) => (
              <div className="col-3 fetch-img">
                <img src={value.image} className="img-fluid" />
                <hr />
                <p>{value.title}</p>
                <p>Price:{value.price}</p>{" "}
                <Button variant="success">Add To Cart</Button>
              </div>
            ))}
        </div>
      </div>
    );
   

}
