import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Stack,
} from "react-bootstrap";
import { Envelope, Github, TwitterX, Whatsapp } from "react-bootstrap-icons";
import "../../styles/contact.css";
import { motion } from "framer-motion";
import { fadeUp } from "../../animation";

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
      <div className="contact_me" id="Contacts">
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.div>

        <div className="my-5">
          <Row className="g-5">
            <Col className="col-12 col-lg-6">
              <motion.div
                variants={fadeUp}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.2 }}
              >
                {myContacts.map((mc) => {
                  return (
                    <div
                      key={mc}
                      className="px-4 py-3 mb-4"
                      style={{ background: "#ffffff1f", borderRadius: "8px" }}
                    >
                      <Stack
                        direction="horizontal"
                        gap={4}
                        className="align-items-center"
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
                          <p
                            className="text-white mt-1"
                            style={{ fontSize: "13px" }}
                          >
                            {mc.b}
                          </p>
                        </div>
                      </Stack>
                    </div>
                  );
                })}
              </motion.div>
            </Col>

            <Col>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Form className="">
                  <FloatingLabel controlId="floatingName" label="NAME">
                    <Form.Control type="Name" placeholder="Your name" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="EMAILADDRESS"
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

                  <button
                    type="submit"
                    className="my-4 ms-auto d-block mt-5"
                    size="lg"
                  >
                    Send
                  </button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
