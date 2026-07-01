import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Github, TwitterX, Whatsapp } from "react-bootstrap-icons";
import "../../styles/contact.css";

const myContacts = [
  {
    bg: "#7c550279",
    color: "#7c5502fd",
    Icon: Envelope,
    a: "Email",
    b: "Amuleagbagunsamuel12@gmail.com",
  },
  {
    bg: "#1b7c0286",
    color: "#1a7c02",
    Icon: Whatsapp,
    a: "Whatsapp",
    b: "+234 813 037 9493",
  },
  {
    bg: "#7c024979",
    color: "#7c0249fd",
    Icon: Github,
    a: "GitHub",
    b: "github.com/samklefboy",
  },
  {
    bg: "#021e7c79",
    color: "#021e7c",
    Icon: TwitterX,
    a: "Twitter / X",
    b: "@samklefboy",
  },
];

export default function Contact() {
  return (
    <Container>
      <div className="contact_me">
        <div className="d-inline-flex flex-column mb-4">
          <h4 className="mt-5 mb-3  " style={{ color: "#eeaaff" }}>
            GET IN TOUCH
          </h4>

          <div style={{ border: "2px solid #eeaaff", width: "50%" }} />
        </div>

        <div>
          <h1 className="text-white">Let's work together</h1>
          <p>Open to freelance projects and remote opportunities </p>
        </div>

        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}
