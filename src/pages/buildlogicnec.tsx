import ProductCard from "../components/ProductCard";
import SuiteGroupCard from "../components/SuiteGroupCard";
import { necProducts } from "../data/necProducts";
import type { ProductItem } from "../data/necProducts";

function groupKey(p: ProductItem) {
  const split = p.name.split("— Tier");
  return split[0].trim();
}

function numericPrice(p: ProductItem) {
  const n = Number(String(p.price).replace(/[^\d.]/g, "")) || 0;
  return n;
}

export default function BuildLogicNEC() {
  const tier1 = necProducts.filter((p) => p.tier === "Tier 1");
  const tier2 = necProducts.filter((p) => p.tier === "Tier 2");
  const tier3 = necProducts.filter((p) => p.tier === "Tier 3");

  // group Tier 2 by suite name
  const suiteMap = new Map<string, ProductItem[]>();
  for (const p of tier2) {
    const key = groupKey(p);
    if (!suiteMap.has(key)) suiteMap.set(key, []);
    suiteMap.get(key)!.push(p);
  }

  const suiteGroups = Array.from(suiteMap.entries())
    .map(([title, items]) => ({
      title,
      items: items.slice().sort((a, b) => numericPrice(a) - numericPrice(b)),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  // Special full-width suites:
  const SPECIAL_FULL_WIDTH = new Set<string>([
    "NEC Early Warning + Change Suite",
    "NEC Supply Chain Manager (TSC-focused)",
  ]);

  const wideSuites = suiteGroups.filter((g) => SPECIAL_FULL_WIDTH.has(g.title));
  const gridSuites = suiteGroups.filter((g) => !SPECIAL_FULL_WIDTH.has(g.title));

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <p style={{ opacity: 0.85 }}>
        NEC-focused commercial intelligence tools designed for contractors, employers and consultants.
      </p>

            {/* BuildLogic NEC Banner */}
      <div
        style={{
          marginBottom: 24,
          width: "100%",
        }}
      >
        <img
          src="./banners/buildlogic-nec-banner.png"
          alt="BuildLogic NEC – Construction Intelligence Limited"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <h2 style={{ marginTop: 22 }}>Tier 1 — Focused Micro Tools</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {tier1.map((p) => <ProductCard key={p.id} item={p} />)}
      </div>

      <h2 style={{ marginTop: 34 }}>Tier 2 — Core Suites (Condensed)</h2>

      {/* 2-column grid for main suites */}
      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        {gridSuites.map((g) => (
          <SuiteGroupCard key={g.title} title={g.title} items={g.items} />
        ))}
      </div>

      {/* Full-width for special suites */}
      <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
        {wideSuites.map((g) => (
          <SuiteGroupCard key={g.title} title={g.title} items={g.items} />
        ))}
      </div>

      <h2 style={{ marginTop: 34 }}>Tier 3 — Strategic Tools</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {tier3.map((p) => <ProductCard key={p.id} item={p} />)}
      </div>
    </div>
  );
}
