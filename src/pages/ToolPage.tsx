import { Link, useParams } from "react-router-dom";
import { necProducts } from "../data/necProducts";

export default function ToolPage() {
  const { id } = useParams<{ id: string }>();
  const item = necProducts.find((x) => x.id === id);

  if (!item) {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
        <h2>Tool not found</h2>
        <p style={{ opacity: 0.85 }}>No tool matches: {id}</p>
        <Link to="/buildlogic-nec">Back to NEC Tools</Link>
      </div>
    );
  }

  const disabled = !item.stripe;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <Link to="/buildlogic-nec" style={{ textDecoration: "none", border: "1px solid #333", padding: "8px 10px", borderRadius: 12 }}>
          ← Back to NEC Tools
        </Link>
        <div style={{ opacity: 0.7 }}>Tier: {item.tier}</div>
      </div>

      <h1 style={{ marginTop: 16 }}>{item.name}</h1>
      <div style={{ fontWeight: 900, fontSize: 18 }}>{item.price}</div>
      <p style={{ opacity: 0.85, marginTop: 10 }}>{item.desc}</p>

      <div style={{ marginTop: 18, border: "1px solid #222", borderRadius: 16, padding: 14 }}>
        <div style={{ fontWeight: 900, marginBottom: 8 }}>What you get</div>
        <ul style={{ marginTop: 0 }}>
          <li>Structured NEC output aligned to the tool purpose</li>
          <li>Commercially usable format (client-ready)</li>
          <li>Practical prompts, checks, and risk flags</li>
          <li>Clear next-actions list (what to do next)</li>
        </ul>

        <div style={{ fontWeight: 900, marginTop: 12 }}>Ideal for</div>
        <ul style={{ marginTop: 0 }}>
          <li>Contractors, Employers, PMs, QSs, Contract Managers</li>
          <li>Projects needing speed + commercial control</li>
        </ul>

        <div style={{ marginTop: 16 }}>
          {disabled ? (
            <button
              disabled
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #555",
                fontWeight: 900,
                opacity: 0.6,
                cursor: "not-allowed",
              }}
            >
              Checkout (TBC)
            </button>
          ) : (
            <a
              href={item.stripe}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                textDecoration: "none",
                textAlign: "center",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #555",
                fontWeight: 900,
              }}
            >
              Proceed to Secure Checkout
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
