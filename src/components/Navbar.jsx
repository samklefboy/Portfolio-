import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar className={`fixed-top  ${scrolled ? "nav_scrolled" : ""}`}>
        <Container fluid className="px-3">
          <div
            className="logo-name me-auto d-flex "
            style={{ cursor: "pointer" }}
          >
            <h2>
              <a style={{ color: "#c300ff " }} href="#Home">
                AMULEAGBAGUN SAMUEL{" "}
              </a>
            </h2>
          </div>

          <div>
            <FaBars
              onClick={handleShow}
              className={` d-lg-none m-0 p-0  ${show ? "d-none" : "d-block"}`}
              size={20}
              style={{ color: "#ffffffb0", cursor: "pointer", flexShrink: 0 }}
            />

            <Nav className="d-none d-lg-flex gap-1">
              {["Home", "About", "Stacks", "Projects", "Contacts"].map((ab) => {
                return (
                  <Nav.Link
                    key={ab}
                    href={`#${ab}`}
                    style={{ color: "#ffffffb0" }}
                  >
                    <h5>{ab}</h5>
                  </Nav.Link>
                );
              })}
            </Nav>
          </div>
        </Container>
      </Navbar>

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
            { a: "Contacts", Icon: FaPhone },
          ].map((S) => {
            return (
              <Nav.Link
                key={S}
                className="py-2 d-flex align-items-center gap-4"
                href={`#${S.a}`}
                onClick={handleClose}
              >
                <S.Icon style={{ color: "#c300ff", fontSize: "20px" }} />

                <div className="w-100">
                  <h5 className="text-white">{S.a}</h5>
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
    </div>
  );
}

export default Header;
