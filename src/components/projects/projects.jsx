import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import "../../styles/projects.css";
import { Slider } from "./ImgSlider";
import { Tools } from "./Stack";

const myProjects = [
  {
    img: ["Image_20230817_134810.jpeg", "Image_20230817_134929.jpeg"],
    status: "In Development",
    color: "#eeff00",
    background: "#9aa5003a",
    a: "r . o . a. marketplace",
    category: "E-commerce platform",
    b: "A full marketplace platform where buyer connects with local stores. Features orders, wishlist, wallet store, user profiles and more ",
    c: "frontends built, backend integration with prisma & progresQl in progress",
    stack: ["React", "Bootstrap", "SCSS", "Node.js", "More..."],
  },
  {
    img: ["Screenshot_20230114-194316.jpg", "Screenshot_20230114-194417_1.png"],
    status: "Live",
    color: "#00ff0d",
    background: "#00500446",
    a: "Riobeta",
    category: "B2B SaaS Landing Page",
    b: "A conversion-focused landing page for a business communication platform that help companies integrate SMS and voice call sevices.",
    stack: ["React", "Bootstrap", "SCSS", "More..."],
  },
];

export default function Projects() {
  return (
    <Container>
      <div className="my_work">
        <div className="d-inline-flex flex-column mb-4">
          <h4 className="mt-5 mb-3  " style={{ color: "#eeaaff" }}>
            MY WORK
          </h4>

          <div style={{ border: "2px solid #eeaaff", width: "50%" }} />
        </div>

        <div>
          <h1 className="text-white">Projects i've built</h1>
        </div>

        <Row className="g-3 my-3">
          {myProjects.map((p) => {
            return (
              <Col key={p} className="col-12 col-sm-6">
                <Card
                  className="project-card"
                  style={{ border: `1px solid ${p.background}` }}
                >
                  <div className="card_top">
                    <Slider img={p.img} />

                    <div
                      style={{
                        background: `${p.background}`,
                        position: "absolute",
                        width: "100%",
                        height: "300px",
                        top: 0,
                        zIndex: 1,
                      }}
                    />

                    <div
                      style={{
                        border: `1px solid ${p.color}`,
                        color: `${p.color}`,
                        background: `${p.background}`,
                        padding: "5px 20px",
                        display: "inline-block",
                        position: "absolute",
                        right: 10,
                        top: 10,
                        zIndex: 1,
                      }}
                    >
                      {p.status}
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title className="text-white fw-bold fs-4 mt-2">
                      {p.a}
                    </Card.Title>

                    <div
                      className="my-3"
                      style={{ color: "#ffffffb0", fontSize: "18px" }}
                    >
                      {p.b} <small style={{ color: `${p.color}` }}>{p.c}</small>
                    </div>

                    <Tools tool={p.stack} />

                    <Stack className="mb-4 mt-5" direction="horizontal" gap={2}>
                      <button
                        className="w-100 py-2"
                        style={{ background: "transparent", color: "#fff" }}
                      >
                        Live preview
                      </button>
                      <button
                        className="w-100 py-2"
                        style={{ background: "transparent", color: "#fff" }}
                      >
                        GitHub
                      </button>
                      \
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          <Col className="col-12 col-sm-6">
            <Card
              className=" d-flex align-items-center justify-content-center"
              style={{
                background: "#ececec2d",
                border: "1px solid #dbdbdb1a",
                color: "#ffffffb0",
                height: "300px",
              }}
            >
              <div className="text-center">
                <h5 style={{ fontSize: "50px", color: "#ffffff21 " }}>+</h5>
                <p>More coming soon</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
