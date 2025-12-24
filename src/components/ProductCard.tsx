import { Link } from "react-router-dom";
import type { ProductItem } from "../data/necProducts";

export default function ProductCard({ item }: { item: ProductItem }) {
  const disabled = !item.stripe;

  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: 16,
        padding: 12, // reduced from 16
        display: "flex",
        flexDirection: "column",
        gap: 8,      // reduced from 10
        minHeight: 160, // keeps it compact but readable
      }}
    >
      <div style={{ fontWeight: 950, fontSize: 15 }}>{item.name}</div>
      <div style={{ opacity: 0.82, lineHeight: 1.25, fontSize: 13 }}>{item.desc}</div>
      <div style={{ fontWeight: 950 }}>{item.price}</div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
        <Link
          to={`/tool/${item.id}`}
          style={{
            textDecoration: "none",
            textAlign: "center",
            padding: "8px 10px",
            borderRadius: 12,
            border: "1px solid #555",
            fontWeight: 900,
            fontSize: 13,
          }}
        >
          Tool Page
        </Link>

        {disabled ? (
          <button
            disabled
            style={{
              padding: "8px 10px",
              borderRadius: 12,
              border: "1px solid #555",
              fontWeight: 900,
              fontSize: 13,
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
              textDecoration: "none",
              textAlign: "center",
              padding: "8px 10px",
              borderRadius: 12,
              border: "1px solid #555",
              fontWeight: 900,
              fontSize: 13,
            }}
          >
            Checkout
          </a>
        )}
      </div>
    </div>
  );
}
