import { Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import { container, fadeUp } from "../../animation";

export default function FrontendSkills({ frontend }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="d-flex flex-wrap gap-4 mt-3">
        {frontend.map((fr, i) => {
          return (
            <motion.div variants={fadeUp}>
              <div
                key={i}
                style={{
                  background: "#ffffff21",
                  border: "1px solid #ffffff7a",
                  borderRadius: "9px",
                  padding: "4px 10px",
                  color: "#ffffffb0",
                }}
              >
                <Stack direction="horizontal" gap={2}>
                  <div
                    style={{
                      background: `${fr.color}`,
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>{fr.a}</div>
                </Stack>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
