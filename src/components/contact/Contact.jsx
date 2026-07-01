import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Envelope, Github, TwitterX, Whatsapp } from "react-bootstrap-icons";
import "../../styles/contact.css";

const myContacts = [
  {
    bg: "#47310123",
    color: "#ffae00fd",
    Icon: Envelope,
    a: "Email",
    b: "Amuleagbagunsamuel12@gmail.com",
  },
  {
    bg: "#0f4b002c",
    color: "#33ff00",
    Icon: Whatsapp,
    a: "Whatsapp",
    b: "+234 813 037 9493",
  },
  {
    bg: "#46002927",
    color: "#ff0095fd",
    Icon: Github,
    a: "GitHub",
    b: "github.com/samklefboy",
  },
  {
    bg: "#000f411e",
    color: "#003cff",
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

        <Row className="my-5">
          <Col className="col-12 col-md-6">
            <Row className="g-4">
              {myContacts.map((mc) => {
                return (
                  <Col key={mc} className="col-12">
                    <div
                      className="d-flex align-items-center  gap-4 px-4 py-3"
                      style={{ background: "#ffffff1f", borderRadius: "8px" }}
                    >
                      <div
                        style={{
                          background: `${mc.bg}`,
                          padding: "12px",
                          borderRadius: "12px",
                        }}
                      >
                        <mc.Icon size={18} style={{ color: `${mc.color}` }} />
                      </div>

                      <div>
                        <p className="m-0">{mc.a}</p>
                        <h6 className="text-white">{mc.b}</h6>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>

          <Col>
            <Form>
              <FloatingLabel controlId="floatingName" label="NAME">
                <Form.Control type="Name" placeholder="Your name" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="EMailADDRESS"
                className="my-5"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingSubject" label="SUBJECT">
                <Form.Control type="subject" placeholder="Subject" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="MESSAGE"
                className="mt-5"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Tell me about your project here..."
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <button type="submit" className="my-4 ms-auto d-block" size="lg">
                Send
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
