import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Product() {
    var [Product, setProduct] = useState([]);
    useEffect(() => {
        console.log('useEffect called-product');
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setProduct(json)
            });


    }, []);
  return (
    <div>
      <p>Product Component</p>

      <Row>
        {Product &&
          Product.length > 0 &&
          Product.map((values) => (
              <Col xs={4}>
                  <img src={values.image} className='img-fluid'/>
              <p>{values.title}</p>
              <p>{values.Price}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
}
