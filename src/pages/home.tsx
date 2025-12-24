import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <h1 style={{ marginTop: 8 }}>BuildLogic NEC Hub</h1>
      <p style={{ opacity: 0.85 }}>
        Founder / operational hub for NEC tools, suites, and checkout links.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
        <Link
          to="/buildlogic-nec"
          style={{
            textDecoration: "none",
            border: "1px solid #333",
            padding: "10px 14px",
            borderRadius: 14,
            fontWeight: 900,
          }}
        >
          Open NEC Tools & Suites
        </Link>

        <a
          href="#"
          style={{
            textDecoration: "none",
            border: "1px solid #333",
            padding: "10px 14px",
            borderRadius: 14,
            fontWeight: 900,
            opacity: 0.6,
          }}
          onClick={(e) => e.preventDefault()}
        >
          (Guides coming next)
        </a>
      </div>

      <div style={{ marginTop: 28, borderTop: "1px solid #222", paddingTop: 18, opacity: 0.85 }}>
        <div style={{ fontWeight: 900 }}>Note</div>
        <div>
          Stripe links are live. Next steps are tool backing pages + missing Tier 2 items + GitHub Pages deploy.
        </div>
      </div>
    </div>
  );
}
