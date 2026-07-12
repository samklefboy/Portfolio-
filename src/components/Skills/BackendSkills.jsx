import { Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import { container, fadeUp } from "../../animation";

export default function BackendSkills({ backend }) {
  return (
    <motion.div
      className="d-flex gap-4 flex-wrap"
      varaiants={container}
      initial="hidden"
      whileInView="visible"
      viewPort={{ once: true }}
    >
      {backend.map((bck) => {
        return (
          <div key={bck}>
            <motion.div
              varaiants={fadeUp}
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
                    background: `${bck.color}`,
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />
                <div>{bck.a}</div>
              </Stack>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
