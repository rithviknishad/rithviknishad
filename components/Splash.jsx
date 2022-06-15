export default function Splash() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <span style={{ fontSize: "36px" }}>{"Hey there 👋"}</span>
      <span
        style={{
          marginTop: "32px",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          letterSpacing: "0.5em",
        }}
        className="animate-pulse"
      >
        {"LOADING"}
      </span>
    </div>
  );
}
