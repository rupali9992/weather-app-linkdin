import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col Xs={3}>
            <h2>Jeans</h2>
            <p>2000</p>
            <Link to={"/"}>visit</Link>
          </Col>
          <Col Xs={3}>
            <h2>Jeans</h2>
            <p>2000</p>
            <Link to={"/"}>visit</Link>
          </Col>
          <Col Xs={3}>
            <h2>Jeans</h2>
            <p>2000</p>
            <Link to={"/"}>visit</Link>
          </Col>
          <Col Xs={3}>
            <h2>Jeans</h2>
            <p>2000</p>
            <Link to={"/"}>visit</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
