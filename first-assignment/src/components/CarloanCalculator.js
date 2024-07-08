import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { createRef, useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CarloanCalculator() {
  var [amount, setAmount] = React.useState(0);
  var [interest, setInterest] = React.useState(0);
  var [tenure, setTenure] = React.useState(0);
  var [EMI, setEMI] = React.useState(0);
  var [totalAmount, settotalAmount] = React.useState(0);
  var [totalInterest, settotalInterest] = React.useState(0);
  var [chartdata, setchartdata] = React.useState({});

  var x1 = React.useRef();
  function f1(ev) {
    setAmount(ev.target.value);
    console.log(ev.target.value);
  }
  function f2(ev) {
    console.log(ev.target.value);
    setInterest(ev.target.value);
  }
  function f3(ev) {
    console.log(ev.target.value);
    setTenure(ev.target.value);
  }
  function calculate() {
    if (amount == "" && interest == "" && tenure == "") {
      x1.current.innerHTML = "values are required";
    }
    var P = +amount;
    var R = +interest;
    var N = +tenure;
    // E= P. R. (1+R)^n/[(1+R)^n -1]
    N = N * 12;
    R = R / 12 / 100;
    var EMI = (P * R * (1 + R) ** N) / ((1 + R) ** N - 1);

    EMI = Math.round(EMI);
    console.log(EMI);
    var totalAmount = EMI * N;

    totalAmount = Math.round(totalAmount);
    console.log(totalAmount);
    var totalInterest = totalAmount - P;
    console.log(totalInterest);
    totalInterest = Math.round(totalInterest);
    console.log(totalInterest);
    setEMI(EMI);
    settotalAmount(totalAmount);
    settotalInterest(totalInterest);
    const options = {
      title: {
        text: "Car Loan Chart",
      },
      chart: {
        type: "pie",
      },
      series: [
        {
          data: [
            {
              name: "Actual Amount",
              y: P,
            },
            {
              name: "Total Interest",
              y: totalInterest,
            },
            {
              name: "Monthly EMI",
              y: EMI,
            },
            {
              name: "Tatal Amount",
              y: totalAmount,
            },
          ],
        },
      ],
    };
    setchartdata(options)

  }
  return (
    <>
      <h3 className="stockheading pt-3 pb-3">Car Loan Calculator</h3>
      <Container className="border p-5">
        <Row>
          <Col xs={5}>
            {" "}
            <Form.Label>Loan Amount</Form.Label>
            <Form.Control onChange={f1} />
            <br />
            <Form.Label>Loan Tenure</Form.Label>
            <Form.Control onChange={f3} />
            <br />
            <Form.Label>Rate of Interst</Form.Label>
            <Form.Control onChange={f2} />
            <br />
            <p> Principle Amount :{amount}</p>
            <p>Monthly EMI :{EMI} </p>
            <p>Total Amount :{totalAmount} </p>
            <p> Total Interst :{totalInterest}</p>
            <Button variant="success" onClick={calculate}>
              Calculate
            </Button>
          </Col>

          <Col xs={7}>
            <p ref={x1}>
              {amount}, {interest}, {tenure}
            </p>
            <hr />
            <HighchartsReact highcharts={Highcharts} options={chartdata} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
