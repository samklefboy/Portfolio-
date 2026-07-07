import { Stack } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Tools({ tools, container, chip }) {
  return (
    <motion.div
      className="d-flex gap-4 flex-wrap"
      varaiants={container}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: true }}
    >
      {tools.map((t) => {
        return (
          <div key={t}>
            <motion.div
              varaiants={chip}
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
                    background: `${t.color}`,
                    padding: "4px",
                    borderRadius: "50%",
                  }}
                />
                <div>{t.a}</div>
              </Stack>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
