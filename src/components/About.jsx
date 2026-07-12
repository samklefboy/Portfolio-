import { Row, Col, Container } from "react-bootstrap";
import { Code, MortarboardFill, LightbulbFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "../animation";
import "../styles/About.css";

const aboutMe = [
  {
    icon: MortarboardFill,
    id: "1",
    color: "#cf9f00",
    a: "Education",
    b: "H.ND Mecahnical Engineering gradaute who discovered a passion for building digital products with a problem-solving mindet - since both fields are about solving real problems with structured thinking",
  },
  {
    id: "2",
    icon: Code,
    color: "#9900ff",
    a: "Development",
    b: "Self-taught frontend developer specialized in React, Bootstrap turning designs into real working interfaces that are not just beautiful but",
    c: "purposeful",
  },
  {
    id: "3",
    icon: LightbulbFill,
    color: "#5a14ff",
    a: "Approach",
    b: "I don't just think write code - i think about the user experience first, Clean UI and logical structure are non-negotiable for me ",
  },
];

export default function AboutMe() {
  return (
    <Container>
      <div className="about_me " id="About">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <div className="d-inline-flex flex-column mb-4">
            <h4 className="mt-5 mb-3  " style={{ color: "#eeaaff" }}>
              ABOUT ME
            </h4>

            <div style={{ border: "2px solid #eeaaff", width: "50%" }} />
          </div>

          <div>
            <h1 className="text-white">
              Engineer by training. Developer by passion
            </h1>
            <Row className="my-3 g-5 ">
              {aboutMe.map((abt, i) => {
                return (
                  <Col key={i} className="col-12 col-md-4 ">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={zoomIn}
                    >
                      <div
                        className="d-flex flex-column  px-4 py-4 abt-col"
                        style={{ background: "#ffffff27" }}
                      >
                        <div
                          style={{
                            color: `${abt.color}`,
                            marginBottom: "15px",
                          }}
                        >
                          <abt.icon size={33} />
                        </div>

                        <h4 className="text-white mt-3 mb-4">{abt.a}</h4>

                        <p style={{ fontSize: "21px" }}>
                          {abt.b} <span className="text-warning">{abt.c}</span>
                        </p>
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
