import { Row, Col, Container, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "../animation";
import "../styles/experience.css";

const myExperience = [
  {
    id: "1",
    a: "2025-present",
    b: "Freelance Frontend Developer",
    c: "Self employed",
    d: "Remote",
    e: "Building different kind of web aplications and web pages for clients across different industries.",
  },
  {
    id: "2",
    a: "2024",
    b: "Started Web Development",
    c: "Self taught",
    d: "Online",
    e: "Transitioned from Mechanical Engineering into frontend development. Learned through consistent daily practice",
  },
  {
    id: "3",
    a: "2021 - 2023",
    b: "H.N.D Mechanical Engineering",
    c: "polytechnic",
    d: "Nigeria",
    e: "Graduated with a Upper Credit in Mechanical Engineering. Developed strong creativity, analytical and problem-solving skills which directly influence my approach to software development",
  },
];

export default function Experience() {
  return (
    <Container>
      <div className="my_experience " id="Experience">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <div className="d-inline-flex flex-column mb-4">
            <h4 className="mt-5 mb-3  " style={{ color: "#eeaaff" }}>
              MY JOURNEY
            </h4>

            <div style={{ border: "2px solid #eeaaff", width: "50%" }} />
          </div>

          <div>
            <h1 className="text-white mt-4">Experience & timeline</h1>

            <Row className="my-5 g-5 ">
              {myExperience.map((exp, i) => {
                return (
                  <Col key={i} className="col-12 col-md-6 col-lg-4">
                    <motion.div
                      className="exp-border"
                      style={{ border: "1px solid #2c2c2c", padding: 30 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.11 }}
                      variants={zoomIn}
                    >
                      <Stack
                        direction="horizontal"
                        className="align-items-start py-3"
                        gap={4}
                      >
                        <div
                          className="turning"
                          style={{
                            borderRadius: "50%",
                            border: "3px solid #fffb00",
                          }}
                        >
                          <div
                            className="p-2 m-1 zooming"
                            style={{
                              background: "#fffb00",
                              borderRadius: "50%",
                            }}
                          ></div>
                        </div>

                        <div>
                          <h6>{exp.a}</h6>
                          <h3 className="text-white">{exp.b}</h3>
                          <div
                            className="d-flex align-items-center gap-2 "
                            style={{ color: "#fffb00" }}
                          >
                            <div className="m-0">{exp.c}</div>
                            <div className="mb-2">.</div>
                            <div className="m-0">{exp.d}</div>
                          </div>
                          <h5 className="mt-4" style={{ lineHeight: 1.59 }}>
                            {exp.e}
                          </h5>
                        </div>
                      </Stack>
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
