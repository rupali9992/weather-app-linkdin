
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";






import Form from "react-bootstrap/Form";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Markscalculation() {
  // var CanvasJS = CanvasJSReact.CanvasJS;

  var [physics, setphysics] = useState(0);
  var [Chemistry, setchaemistry] = useState(0);
  var [Math, setMath] = useState(0);
  var [total, settotal] = useState(0);
  var [totalPercentage, settotalPercentage] = useState(0);
  var [Marks, setMarks] = useState({});

  var x1 = React.useRef();

  function f1(ev) {
    setMath(ev.target.value);
  }
  function f2(ev) {
    setphysics(ev.target.value);
  }
  function f3(ev) {
    setchaemistry(ev.target.value);
  }
  function calculate() {
    console.log("test");
    if (physics == "" && Chemistry == "" && Math == "") {
      x1.current.innerHTML = "values are required";
    } else if (physics == 0 && Chemistry == 0 && Math == 1) {
      x1.current.innerHTML = "All fields are required";
    } else if (physics == 1 && Chemistry == 0 && Math == 0) {
      x1.current.innerHTML = "All fields are required";
    } else if (physics == 0 && Chemistry == 1 && Math == 0) {
      x1.current.innerHTML = "All fields are required";
    } else if (physics <= 35 || Math <= 35 || Chemistry <= 35) {
      x1.current.innerHTML = "Fail(if any numer passed below 35)";
    } else if (physics >= 100 || Math >= 100 || Chemistry >= 100) {
      x1.current.innerHTML = "number allowed between 35 to 100";
    }

    var P = +physics;
    var M = +Math;
    var C = +Chemistry;
    var total = P + M + C;
    console.log(total);
    var totalPercentage = (total / 300) * 100;
    console.log(totalPercentage);
    settotal(total);
    settotalPercentage(totalPercentage);

    const options = {
      title: {
        text: "Marks Chart",
      },
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            { label: "Physics", y: P },
            { label: "Chemistry", y: C },
            { label: "Math", y: M },
          ],
        },
      ],
    };

    setMarks(options);
  }
  return (
    <>
      <h3 className="stockheading pt-3 pb-3">Percentage Calculator</h3>
      <Container className="border p-5">
        <Row>
          <Col>
            {" "}
            <Form.Label>Math</Form.Label>
            <Form.Control onChange={f1} />
            <br />
            <Form.Label>Physics </Form.Label>
            <Form.Control onChange={f2} />
            <br />
            <Form.Label> Chemistry</Form.Label>
            <Form.Control onChange={f3} />
            <br />
            <Button variant="success" onClick={calculate}>
              Calculate
            </Button>
            <hr />
            <p>Total : {total}/300</p>
            <p>Percentage : {totalPercentage}%</p>
          </Col>

          <Col xs={7}>
            {/*<p ref={x1}>
              {physics},{Math},{Chemistry}
            </p>
  <hr />*/}
            <CanvasJSChart options={Marks} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
