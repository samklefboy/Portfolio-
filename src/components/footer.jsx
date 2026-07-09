import { Stack, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animation";
import { Twitter, Whatsapp, Linkedin, Github } from "react-bootstrap-icons";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div
      className=""
      style={{
        background: " #0000009a ",
        backdropFilter: "blur(20px)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col className="col-12 col-sm-6">
            <motion.div
              varaiants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            >
              <div className="d-flex flex-column gap-0 align-items-center align-items-sm-start py-3 py-sm-0">
                <h4
                  className="m-0"
                  style={{ color: "#fffb00", letterSpacing: 2 }}
                >
                  Samuel.A
                </h4>
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "#c300ff" }}
                >
                  <p className="m-0">2026</p>
                  <span className="mb-2">.</span>
                  <p className="m-0">lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col className="col-12 col-sm-auto ms-sm-auto">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            >
              <Stack
                direction="horizontal"
                gap={4}
                className="justify-content-center justify-content-sm-end py-3 py-sm-0"
              >
                <a className="icons" href="">
                  <Whatsapp />
                </a>
                <a className="icons" href="">
                  <Twitter />
                </a>
                <a className="icons" href="">
                  <Linkedin />
                </a>
                <a className="icons" href="">
                  <Github />
                </a>
              </Stack>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
