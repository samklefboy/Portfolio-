import { Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import { container, fadeUp } from "../../animation";

export default function Tools({ tools }) {
  return (
    <motion.div
      className="d-flex gap-4 flex-wrap"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewPort={{ once: true }}
    >
      {tools.map((t) => {
        return (
          <motion.div
            key={t}
            variants={fadeUp}
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
        );
      })}
    </motion.div>
  );
}
