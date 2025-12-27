import "./App.css";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b1220",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, Arial",
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 720,
          textAlign: "center",
          background: "#111a2e",
          borderRadius: 16,
          padding: "48px 32px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src="/banners/buildlogic-nec-banner.png"
          alt="BuildLogic NEC"
          style={{
            maxWidth: "100%",
            marginBottom: 32,
            borderRadius: 12,
          }}
        />

        <h1 style={{ fontSize: 36, marginBottom: 16 }}>
          BuildLogic NEC Hub
        </h1>

        <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 24 }}>
          This platform is currently undergoing a major upgrade.
        </p>

        <p style={{ fontSize: 16, opacity: 0.7 }}>
          We are consolidating all NEC micro-tools and suites into a single,
          fully-featured Construction Intelligence Engine.
        </p>

        <div
          style={{
            marginTop: 40,
            padding: 20,
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <strong>Status:</strong> 🚧 Coming Soon  
          <br />
          <span style={{ opacity: 0.75 }}>
            Public access temporarily disabled
          </span>
        </div>
      </div>
    </div>
  );
}
