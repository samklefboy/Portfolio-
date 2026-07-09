import { Stack } from "react-bootstrap";
import { motion } from "framer-motion";

export default function BackendSkills({ backend, container, chip }) {
  return (
    <div className="d-flex flex-wrap gap-4 mt-3">
      <motion.div
        className="d-flex gap-4 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewPort={{ once: true }}
      >
        {backend.map((bck) => {
          return (
            <div key={bck}>
              <motion.div
                variants={chip}
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
    </div>
  );
}
