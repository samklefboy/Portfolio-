export function Tools({ tool }) {
  return (
    <>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {tool.map((s) => {
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
              {s}
            </div>
          );
        })}
      </div>
    </>
  );
}
