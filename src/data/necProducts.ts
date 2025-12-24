export type ProductItem = {
  id: string;        // used for backing pages
  name: string;
  price: string;
  stripe?: string;   // optional if not yet created
  desc: string;
  tier: "Tier 1" | "Tier 2" | "Tier 3";
};

export const necProducts: ProductItem[] = [
  // ----------------------
  // TIER 1 — MICRO TOOLS
  // ----------------------
  {
    id: "nec-risk-register-builder",
    tier: "Tier 1",
    name: "NEC Risk Register Builder",
    price: "£695",
    stripe: "https://buy.stripe.com/4gM7sL9Ld3QW24Z5S6aMU10",
    desc: "Structured NEC-compliant risk identification and mitigation register.",
  },
  {
    id: "nec-contract-scope-review",
    tier: "Tier 1",
    name: "NEC Contract + Scope Review",
    price: "£715",
    stripe: "https://buy.stripe.com/bJe00jbTlfzEaBvcguaMU0u",
    desc: "Clause-level NEC contract and scope alignment review.",
  },
  {
    id: "nec-early-warning-risk",
    tier: "Tier 1",
    name: "NEC Early Warning Risk",
    price: "£835",
    stripe: "https://buy.stripe.com/9B64gz6z10EKeRL4O2aMU0t",
    desc: "Early Warning identification and risk impact intelligence.",
  },
  {
    id: "nec-programme-cost-risk",
    tier: "Tier 1",
    name: "NEC Programme + Cost Risk",
    price: "£835",
    stripe: "https://buy.stripe.com/eVq5kDaPhcnsgZTfsGaMU0s",
    desc: "Programme-driven cost exposure and risk assessment.",
  },
  {
    id: "nec-commercial-protection-suite",
    tier: "Tier 1",
    name: "NEC Commercial Protection Suite",
    price: "£695",
    stripe: "https://buy.stripe.com/8x2eVd9LdevAcJDgwKaMU0Z",
    desc: "Baseline NEC commercial safeguards for contractors.",
  },
  {
    id: "nec-programme-time-control-suite",
    tier: "Tier 1",
    name: "NEC Programme & Time Control Suite",
    price: "£795",
    stripe: "https://buy.stripe.com/aFa7sL0aD2MS5hb6WaaMU0Y",
    desc: "Time risk, programme logic and delay protection.",
  },
  {
    id: "nec-payment-cashflow-suite",
    tier: "Tier 1",
    name: "NEC Payment & Cashflow Suite",
    price: "£795",
    stripe: "https://buy.stripe.com/cNi9AT8H95Z4393eoCaMU0X",
    desc: "Payment entitlement, assessment and cashflow control.",
  },
  {
    id: "nec-clause-smart-navigator",
    tier: "Tier 1",
    name: "NEC Clause-by-Clause Smart Navigator",
    price: "£795",
    stripe: "https://buy.stripe.com/9B66oH7D55Z49xrcguaMU0U",
    desc: "Interactive NEC clause intelligence and navigation.",
  },

  // ----------------------
  // TIER 2 — CORE SUITES
  // ----------------------
  // NEC Core Scope Suite (all tiers provided)
  {
    id: "nec-core-scope-suite-1345",
    tier: "Tier 2",
    name: "NEC Core Scope Suite — Tier £1,345",
    price: "£1,345",
    stripe: "https://buy.stripe.com/aFa8wP3mP0EK7pj1BQaMU0v",
    desc: "Core scope control for NEC projects (Tier 1).",
  },
  {
    id: "nec-core-scope-suite-1885",
    tier: "Tier 2",
    name: "NEC Core Scope Suite — Tier £1,885",
    price: "£1,885",
    stripe: "https://buy.stripe.com/9B628r4qTfzE39394iaMU11",
    desc: "Core scope control for NEC projects (Tier 2).",
  },
  {
    id: "nec-core-scope-suite-2560",
    tier: "Tier 2",
    name: "NEC Core Scope Suite — Tier £2,560",
    price: "£2,560",
    stripe: "https://buy.stripe.com/3cI9AT2iL2MS5hba8maMU0x",
    desc: "Core scope control for NEC projects (Tier 3).",
  },
  {
    id: "nec-core-scope-suite-3995",
    tier: "Tier 2",
    name: "NEC Core Scope Suite — Tier £3,995",
    price: "£3,995",
    stripe: "https://buy.stripe.com/14AbJ19Ld738cJD94iaMU0w",
    desc: "Core scope control for NEC projects (Tier 4).",
  },

  // NEC Programme + Cost Suite (all tiers provided)
  {
    id: "nec-programme-cost-suite-1095",
    tier: "Tier 2",
    name: "NEC Programme + Cost Suite — Tier £1,095",
    price: "£1,095",
    stripe: "https://buy.stripe.com/8x23cv8H99bgaBv2FUaMU0I",
    desc: "Programme + cost control suite (Tier 1).",
  },
  {
    id: "nec-programme-cost-suite-1685",
    tier: "Tier 2",
    name: "NEC Programme + Cost Suite — Tier £1,685",
    price: "£1,685",
    stripe: "https://buy.stripe.com/eVqdR9cXp0EKeRL4O2aMU0J",
    desc: "Programme + cost control suite (Tier 2).",
  },
  {
    id: "nec-programme-cost-suite-2495",
    tier: "Tier 2",
    name: "NEC Programme + Cost Suite — Tier £2,495",
    price: "£2,495",
    stripe: "https://buy.stripe.com/14A9AT7D5gDI3930xMaMU0K",
    desc: "Programme + cost control suite (Tier 3).",
  },
  {
    id: "nec-programme-cost-suite-3495",
    tier: "Tier 2",
    name: "NEC Programme + Cost Suite — Tier £3,495",
    price: "£3,495",
    stripe: "https://buy.stripe.com/8x200j8H9738fVP1BQaMU0L",
    desc: "Programme + cost control suite (Tier 4).",
  },

  // NEC Project Health Check Suite (all tiers provided)
  {
    id: "nec-project-health-check-1095",
    tier: "Tier 2",
    name: "NEC Project Health Check Suite — Tier £1,095",
    price: "£1,095",
    stripe: "https://buy.stripe.com/6oUcN5aPh3QWbFzfsGaMU0Q",
    desc: "NEC project health check (Tier 1).",
  },
  {
    id: "nec-project-health-check-1885",
    tier: "Tier 2",
    name: "NEC Project Health Check Suite — Tier £1,885",
    price: "£1,885",
    stripe: "https://buy.stripe.com/5kQ9AT8H97384d7gwKaMU0R",
    desc: "NEC project health check (Tier 2).",
  },
  {
    id: "nec-project-health-check-2495",
    tier: "Tier 2",
    name: "NEC Project Health Check Suite — Tier £2,495",
    price: "£2,495",
    stripe: "https://buy.stripe.com/9B6cN5bTl2MS10V80eaMU0S",
    desc: "NEC project health check (Tier 3).",
  },
  {
    id: "nec-project-health-check-3495",
    tier: "Tier 2",
    name: "NEC Project Health Check Suite — Tier £3,495",
    price: "£3,495",
    stripe: "https://buy.stripe.com/6oUdR97D5drwdNH1BQaMU0T",
    desc: "NEC project health check (Tier 4).",
  },

  // NEC Change Control Log (Employer-side) (tiers provided)
  {
    id: "nec-change-control-log-1195",
    tier: "Tier 2",
    name: "NEC Change Control Log (Employer-side) — Tier £1,195",
    price: "£1,195",
    stripe: "https://buy.stripe.com/aFafZh8H99bgeRL80eaMU0M",
    desc: "Employer-side change control log and governance (Tier 1).",
  },
  {
    id: "nec-change-control-log-1885",
    tier: "Tier 2",
    name: "NEC Change Control Log (Employer-side) — Tier £1,885",
    price: "£1,885",
    stripe: "https://buy.stripe.com/5kQ9AT0aDcns24ZfsGaMU0N",
    desc: "Employer-side change control log and governance (Tier 2).",
  },
  {
    id: "nec-change-control-log-2560",
    tier: "Tier 2",
    name: "NEC Change Control Log (Employer-side) — Tier £2,560",
    price: "£2,560",
    stripe: "https://buy.stripe.com/fZu6oHbTlcns8tngwKaMU0O",
    desc: "Employer-side change control log and governance (Tier 3).",
  },
  {
    id: "nec-change-control-log-3995",
    tier: "Tier 2",
    name: "NEC Change Control Log (Employer-side) — Tier £3,995",
    price: "£3,995",
    stripe: "https://buy.stripe.com/28EbJ14qT3QW5hba8maMU0P",
    desc: "Employer-side change control log and governance (Tier 4).",
  },

  // Missing Stripe links yet — keep placeholders visible, but non-clickable
  {
    id: "nec-early-warning-change-suite",
    tier: "Tier 2",
    name: "NEC Early Warning + Change Suite",
    price: "Tiers: £1,345 / £1,885 / £2,560 / £3,995 (TBC)",
    desc: "Early warning + change management suite. Stripe product/link to be created.",
  },
  {
    id: "nec-supply-chain-manager",
    tier: "Tier 2",
    name: "NEC Supply Chain Manager (TSC-focused)",
    price: "£1,195 (TBC link)",
    desc: "Supply chain management suite for TSC. Stripe product/link to be created.",
  },

  // ----------------------
  // TIER 3 — STRATEGIC
  // ----------------------
  {
    id: "nec-executive-commercial-review",
    tier: "Tier 3",
    name: "NEC Executive Commercial Review",
    price: "£1,750",
    stripe: "https://buy.stripe.com/8x25kD0aD4V05hb0xMaMU13",
    desc: "Board-level NEC commercial position review.",
  },
  {
    id: "nec-dispute-avoidance-pack",
    tier: "Tier 3",
    name: "NEC Dispute Avoidance Intelligence Pack",
    price: "£2,250",
    stripe: "https://buy.stripe.com/9B67sL3mP9bg7pja8maMU0V",
    desc: "Proactive dispute avoidance and risk intelligence.",
  },
  {
    id: "nec-contract-strategy-advisor",
    tier: "Tier 3",
    name: "NEC Contract Strategy Advisor",
    price: "£1,250",
    stripe: "https://buy.stripe.com/4gM9ATbTldrw8tn94iaMU14",
    desc: "Strategic NEC contracting and delivery advisory.",
  },
  {
    id: "nec-executive-commercial-review-alt",
    tier: "Tier 3",
    name: "NEC Executive Commercial Review (Alt Link)",
    price: "£1,750",
    stripe: "https://buy.stripe.com/aFa14n4qTcns3932FUaMU12",
    desc: "Alternate checkout link (keep until you confirm which is canonical).",
  },
];
