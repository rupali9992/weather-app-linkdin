
import LibraryData from "./LibraryData";
import GroupData from "./GroupData";
import MessageData from "./MessageData";
import ContactData from "./ContactData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "./Form";

export default function Sendsms() {
  return (
    <>
      <Container>
        <Row>
          <Col className="grid-structure">
            {" "}
            <sections>
              <LibraryData />
            </sections>
            <br />
            <sections>
              <MessageData />
            </sections>
          </Col>
          <Col className="grid-structure">
            <Form/>
          </Col>
          <Col className="grid-structure">
            {" "}
            <sections className="groupdata">
              <GroupData />
            </sections>
            <br />
            <sections>
              <ContactData />
            </sections>
          </Col>
        </Row>
      </Container>
    </>
  );
}
