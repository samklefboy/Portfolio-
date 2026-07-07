import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeLeft } from "../../animation";
import "../../styles/Hero.css";
import { Name } from "./NameSlider";

export default function Hero() {
  return (
    <>
      <Container>
        <div className="hero" id="Home">
          <Row className="text-center g-5 align-items-center">
            <Col className="col-12 col-lg-8">
              <div style={{ lineHeight: "60px" }}> Hi, I am </div>
              <Name />

              <div className="sub_text">
                Frontend Developer & UI Engineer based in lagos, Nigera.
              </div>
              <div className="d-flex gap-3 mt-5">
                <button>
                  {" "}
                  <a href="#Projects">View My Work</a>
                </button>
                <button> Download CV</button>
              </div>
            </Col>

            <Col className="col-12 col-lg-4 ">
              <div className="profile-pic img-fluid mt-5 mt-lg-0">
                <Image className="floating-img" />
              </div>

              <div className="my_journey my-5">
                {[
                  { a: "2+", bb: "projects" },
                  { a: "1yr", bb: "Experience" },
                ].map((exp) => {
                  return (
                    <motion.div
                      key={exp}
                      variant={fadeLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center p-3"
                        style={{
                          background: "#cc00ff2f",
                          borderRadius: "12px",
                        }}
                      >
                        <div className="d-flex flex-column">
                          <h1 className="m-0" style={{ color: "#ffbb00" }}>
                            {exp.a}
                          </h1>
                          <p className="m-0" style={{ fontSize: "15px" }}>
                            {exp.bb}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
