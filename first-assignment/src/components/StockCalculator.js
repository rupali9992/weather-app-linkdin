import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function StockCalculator() {
  var [a1, data1] = React.useState(0);
  var [a2, data2] = React.useState(0);
  var [a3, data3] = React.useState(0);
  var [a4, data4] = React.useState(0);
  var [units, setunits] = React.useState(0);
  var [AveragePrice, setAveragePrice] = React.useState(0);
  var [totalAmount, settotalAmount] = React.useState(0);
 var x1 = React.useRef();
  function myfun1(ev) {
    console.log(ev.target.value);
    data1(ev.target.value);
  }
  function myfun2(ev) {
    console.log(ev.target.value);
    data2(ev.target.value);
  }
  function myfun3(ev) {
    console.log(ev.target.value);
    data3(ev.target.value);
  }
  function myfun4(ev) {
    console.log(ev.target.value);
    data4(ev.target.value);
  }

  function myfun5(ev) {
    var units = +a1 + +a2;
    console.log(units);
    var AveragePrice = (a1 * a3 + a2 * a4) / `${units}`;
    console.log(AveragePrice);
    var totalAmount = a1 * a3 + a2 * a4;
    console.log(totalAmount);
    setunits(+a1 + +a2);
    setAveragePrice(AveragePrice);
    settotalAmount(totalAmount);
    if (a1 == "" && a2 == "" && a3 == "" && a4 == "" ) {
      x1.current.innerHTML="values are required";
    }
  }
  function f1(ev) {
    console.log(ev.target.value);
    setunits(+a1 + +a2);
    settotalAmount(a1 * a3 + a2 * a4);
  }
  function f2(ev) {
    console.log(ev.target.value);
    setunits(+a1 + +a2);
    settotalAmount(a1 * a3 + a2 * a4);
  }
  function f3(ev) {
    console.log(ev.target.value);

    var AveragePrice = (a1 * a3 + a2 * a4) / `${units}`;

    setAveragePrice(AveragePrice);
    settotalAmount(a1 * a3 + a2 * a4);
  }
  function f4(ev) {
    console.log(ev.target.value);
    var AveragePrice = (a1 * a3 + a2 * a4) / `${units}`;

    settotalAmount(a1 * a3 + a2 * a4);

    setAveragePrice(AveragePrice);
  }
  return (
    <>
      <h3 className="stockheading">Stock market average calculator</h3>
      <Container className="StockCalculator">
        <Row>
          <Col xs={6}>
            {" "}
            <Form.Label>Units</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={myfun1}
              placeholder="Units"
              onClick={f1}
            />
          </Col>
          <Col xs={6}>
            {" "}
            <Form.Label>Units</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={myfun2}
              placeholder="Units"
              onClick={f2}
            />
          </Col>
          <br />
          <Col xs={6}>
            {" "}
            <Form.Label>Price per share</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={myfun3}
              onClick={f3}
            />
          </Col>
          <Col xs={6}>
            {" "}
            <Form.Label>Price per share</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={myfun4}
              onClick={f4}
            />
          </Col>
          <Col xs={6}>
            <p>Total Units: {units}</p>
            <p>Average price :{AveragePrice}</p>

            <p> Total Amount:{totalAmount}</p>
            <Button onClick={myfun5} variant="success">
              Calculate
            </Button>
          </Col>
          <Col xs={6}>
<p ref={x1}>...</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
