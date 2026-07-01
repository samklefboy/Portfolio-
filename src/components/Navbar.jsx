import { Container, Navbar, Stack } from "react-bootstrap";
import "../styles/Navbar.css";

function Header() {
  return (
    <div className="py-3">
      <Navbar expand={true} className="">
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
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
