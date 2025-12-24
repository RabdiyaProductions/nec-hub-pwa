import { Link } from "react-router-dom";
import type { ProductItem } from "../data/necProducts";

function TierRow({ item }: { item: ProductItem }) {
  const disabled = !item.stripe;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr auto auto",
        gap: 8,
        alignItems: "center",
        padding: "8px 0",
        borderTop: "1px solid #222",
      }}
    >
      <div style={{ fontWeight: 900 }}>{item.price}</div>
      <div style={{ opacity: 0.82, lineHeight: 1.2, fontSize: 13 }}>{item.desc}</div>

      <Link
        to={`/tool/${item.id}`}
        style={{
          textDecoration: "none",
          border: "1px solid #444",
          padding: "7px 9px",
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 12,
          whiteSpace: "nowrap",
        }}
      >
        Tool Page
      </Link>

      {disabled ? (
        <button
          disabled
          style={{
            border: "1px solid #444",
            padding: "7px 9px",
            borderRadius: 12,
            fontWeight: 900,
            fontSize: 12,
            opacity: 0.6,
            cursor: "not-allowed",
            whiteSpace: "nowrap",
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
            border: "1px solid #444",
            padding: "7px 9px",
            borderRadius: 12,
            fontWeight: 900,
            fontSize: 12,
            whiteSpace: "nowrap",
          }}
        >
          Checkout
        </a>
      )}
    </div>
  );
}

export default function SuiteGroupCard({
  title,
  items,
}: {
  title: string;
  items: ProductItem[];
}) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: 16,
        padding: 12, // reduced
        width: "100%",
      }}
    >
      <div style={{ fontWeight: 1000, fontSize: 15 }}>{title}</div>

      <div style={{ marginTop: 8 }}>
        {/* compact header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr auto auto",
            gap: 8,
            alignItems: "center",
            paddingBottom: 6,
            borderBottom: "1px solid #222",
            opacity: 0.75,
            fontWeight: 900,
            fontSize: 12,
          }}
        >
          <div>Tier</div>
          <div>Summary</div>
          <div></div>
          <div></div>
        </div>

        {items.map((it) => (
          <TierRow key={it.id} item={it} />
        ))}
      </div>
    </div>
  );
}
