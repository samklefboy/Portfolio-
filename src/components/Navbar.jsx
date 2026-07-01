import { Container, Navbar, Stack, Offcanvas, Nav } from "react-bootstrap";
import { useState } from "react";
import {
  FaBars,
  FaBookOpen,
  FaHome,
  FaPhone,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="py-3">
      <Navbar expand="md" className="">
        <Container>
          <Navbar.Brand href="#Home">
            <Stack
              direction="horizontal"
              gap={1}
              className="brand-logo align-items-center"
            >
              <div className="logo-name">
                <h2>
                  AMULEAGBAGUN SAMUEL <span>.</span>
                </h2>
              </div>
            </Stack>
          </Navbar.Brand>

          <div onClick={handleShow}>
            <FaBars
              size={18}
              style={{ color: "#ffffffb0", cursor: "pointer" }}
            />
          </div>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header className="d-flex align-items-center mb-5">
              <Offcanvas.Title>
                <div className="logo-name">
                  <h2>Portfolio</h2>
                </div>
              </Offcanvas.Title>
              <div onClick={handleClose} className="text-white ms-auto">
                X
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {[
                { a: "Home", Icon: FaHome },
                { a: "About", Icon: FaBookOpen },
                { a: "Stacks", Icon: FaTools },
                { a: "Projects", Icon: FaProjectDiagram },
                { a: "Contact", Icon: FaPhone },
              ].map((i) => {
                return (
                  <Nav.Link className="py-2  d-flex align-items-center gap-4">
                    <i.Icon style={{ color: "#c300ff", fontSize: "20px" }} />

                    <div className="w-100">
                      <h5 className="text-white">{i.a}</h5>
                      <div
                        className="pt-3"
                        style={{ borderBottom: "1px solid #dbdbdb49" }}
                      />
                    </div>
                  </Nav.Link>
                );
              })}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
