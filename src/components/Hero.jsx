import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <>
      <Container>
        <div className="hero mt-5">
          <Row className="text-center g-5 align-items-center">
            <Col className="col-12 col-md-8">
              <div className="">
                {" "}
                Hi, I am <span>Samuel</span>
              </div>
              <div className="sub_text">
                Frontend Developer & UI Engineer based in lagos, Nigera.
              </div>
              <div className="d-flex gap-3 mt-5">
                <button> View My Work</button>
                <button> Download CV</button>
              </div>
            </Col>

            <Col className="col-12 col-md-4 ">
              <div className="profile-pic img-fluid">
                <Image />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
