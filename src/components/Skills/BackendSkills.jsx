import { Stack } from "react-bootstrap";

export default function BackendSkills({ backend }) {
  return (
    <div className="d-flex flex-wrap gap-4 mt-3">
      {backend.map((bck) => {
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
                  background: `${bck.color}`,
                  padding: "4px",
                  borderRadius: "50%",
                }}
              />
              <div>{bck.a}</div>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}
