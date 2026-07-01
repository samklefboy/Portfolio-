import { Stack } from "react-bootstrap";

export default function Tools({ tools }) {
  return (
    <div className="d-flex flex-wrap gap-4 mt-3">
      {tools.map((t) => {
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
}
