import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import BuildLogicNEC from "./pages/BuildLogicNEC";
import ToolPage from "./pages/ToolPage";

export default function App() {
  return (
    <div>
      <div
        style={{
          padding: 14,
          borderBottom: "1px solid #222",
          display: "flex",
          gap: 10,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontWeight: 900 }}>BuildLogic NEC Hub</div>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            border: "1px solid #333",
            padding: "6px 10px",
            borderRadius: 12,
          }}
        >
          Home
        </Link>

        <Link
          to="/buildlogic-nec"
          style={{
            textDecoration: "none",
            border: "1px solid #333",
            padding: "6px 10px",
            borderRadius: 12,
          }}
        >
          NEC Tools
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildlogic-nec" element={<BuildLogicNEC />} />
        <Route path="/tool/:id" element={<ToolPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
