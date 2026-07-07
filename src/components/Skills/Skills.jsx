import { Container } from "react-bootstrap";
import "../../styles/Skills.css";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Tools from "./Tools";

const frontend = [
  { color: "#e20a02", a: "React" },
  { color: "#e202aa", a: "Bootstrap" },
  { color: "#8802e2", a: "Javascript" },
  { color: "#0602e2", a: "HTML & CSS" },
  { color: "#91e903", a: "SCSS" },
];

const backend = [
  { color: "#e2d302", a: "Node.js" },
  { color: "#02e2aa", a: "PrismaORM" },
  { color: "#09e202", a: "postgreSQL" },
  { color: "#e202c4", a: "REST APIs" },
];

const tools = [
  { color: "#02e279", a: "Git & GitHub" },
  { color: "#15e202", a: "VS Code" },
  { color: "#e2026b", a: "Vite" },
  { color: "#5e5e5e", a: "Postman" },
];

export default function Skills() {
  return (
    <Container>
      <div id="Stacks">
        <div className="my_skill">
          <div className="d-inline-flex flex-column mb-4">
            <h4 className="mt-5 mb-3  " style={{ color: "#eeaaff" }}>
              MY Stack
            </h4>

            <div style={{ border: "2px solid #eeaaff", width: "50%" }} />
          </div>

          <div>
            <h1 className="text-white">Skills & tools</h1>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4" style={{ color: "#ffffff4b" }}>
            FRONTEND
          </h4>

          <FrontendSkills frontend={frontend} />
        </div>

        <div className="my-5 py-5">
          <h4 className="mb-4" style={{ color: "#ffffff4b" }}>
            BACKEND & DATABASE
          </h4>

          <BackendSkills backend={backend} />
        </div>

        <div>
          <h4 className="mb-4" style={{ color: "#ffffff4b" }}>
            TOOLS
          </h4>

          <Tools tools={tools} />
        </div>
      </div>
    </Container>
  );
}
