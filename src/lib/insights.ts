export type InsightAuthor = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  publishedLabel: string;
  image: string;
  imageAlt: string;
  series: string;
  author: InsightAuthor;
  body: InsightBlock[];
};

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "lead"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

const simon: InsightAuthor = {
  name: "Simon Haggett",
  role: "Founder, SureClear",
  image: "/simon-haggett.webp",
  imageAlt: "Simon Haggett, Founder of SureClear",
};

export const insightPosts: InsightPost[] = [
  {
    slug: "24-7-trading-and-clearing-operating-model",
    title:
      "24/7 Trading and Clearing: Is Your Operating Model Ready for a Market That Never Closes?",
    excerpt:
      "For banks and clearing members, the move towards continuous trading is not simply a technology question. It is a strategic decision about risk, liquidity, operational resilience and the future economics of clearing.",
    category: "Market infrastructure",
    tags: [
      "Derivatives clearing",
      "Market infrastructure",
      "Operating models",
      "Risk & liquidity",
    ],
    publishedAt: "2026-07-27",
    publishedLabel: "July 27, 2026",
    image: "/regulation-network.jpg",
    imageAlt: "Abstract network visualisation representing market infrastructure",
    series: "SureClear View | Derivatives Clearing & Market Infrastructure",
    author: simon,
    body: [
      {
        type: "p",
        text: "Financial markets are beginning to challenge one of their longest-standing assumptions: that there is a defined period when markets close and the industry can reset.",
      },
      {
        type: "p",
        text: "The growth of digital assets, changing client expectations and developments in market infrastructure are accelerating the debate around 24/7 trading. Industry discussions are increasingly focused not only on extending trading hours, but also on the implications for clearing, settlement and the firms that support these activities.",
      },
      {
        type: "p",
        text: "The Commodity Futures Trading Commission's May 2026 advisory on 24/7 trading, clearing and settlement, alongside industry work published by FIA, underlines that this is now a practical market-structure question rather than a purely theoretical one.",
      },
      {
        type: "lead",
        text: "For banks and clearing members, the strategic question is clear: Can the clearing operating model evolve to support continuous markets without creating disproportionate cost, liquidity pressure or operational risk?",
      },
      {
        type: "h2",
        text: "The real challenge is beyond the trading screen",
      },
      {
        type: "p",
        text: "Extending trading hours may appear straightforward when viewed through the lens of electronic execution. The implications become considerably more complex when the full clearing lifecycle is considered.",
      },
      {
        type: "p",
        text: "Cleared derivatives depend on an interconnected operating model spanning trade processing, position management, margin, collateral, liquidity, settlement, client servicing and risk management.",
      },
      {
        type: "p",
        text: "These activities are supported by infrastructure, counterparties and service providers that have historically operated around established business days, payment-system availability, processing windows and defined operational handovers.",
      },
      {
        type: "p",
        text: "Continuous trading puts pressure on these assumptions.",
      },
      {
        type: "p",
        text: "A market can accept trades while a participant's ability to fund margin, move collateral, resolve exceptions or access essential support remains constrained by conventional operating hours.",
      },
      {
        type: "p",
        text: "This creates a potential mismatch between the availability of the market and the readiness of the infrastructure supporting it.",
      },
      {
        type: "p",
        text: "For clearing members, that mismatch is not merely operational inconvenience. It can affect the ability to manage exposures, meet obligations and deliver a reliable clearing service to clients.",
      },
      {
        type: "h2",
        text: "A strategic choice, not a universal destination",
      },
      {
        type: "p",
        text: "It would be a mistake to assume that every derivatives market needs to operate continuously, or that every product will benefit from the same model.",
      },
      {
        type: "p",
        text: "Markets differ in their liquidity, participants, underlying assets, hedging requirements and settlement arrangements. The commercial case for extended hours will therefore vary.",
      },
      {
        type: "p",
        text: "For some markets, continuous access may offer clear benefits. For others, the cost and complexity of implementation may outweigh the additional value.",
      },
      {
        type: "p",
        text: "A proportionate approach should start with the product and client proposition, followed by a detailed assessment of operational dependencies, risk controls and economic viability.",
      },
      {
        type: "p",
        text: "This is also an opportunity to challenge existing operating models more broadly. Automation, improved exception management, better integration between clearing and collateral processes, and more effective real-time risk information may deliver benefits even where full 24/7 operation is not justified.",
      },
      {
        type: "p",
        text: "The transition should be driven by a clear business case and a credible risk framework, not by the assumption that longer trading hours are inherently better.",
      },
      {
        type: "h2",
        text: "What should clearing leaders do now?",
      },
      {
        type: "p",
        text: "For banks and clearing members, preparation should begin before a specific market or CCP requires a decision.",
      },
      {
        type: "p",
        text: "A practical starting point is to establish a cross-functional view of readiness across five areas:",
      },
      {
        type: "list",
        items: [
          "Market and client demand: Identify where extended trading hours could create genuine commercial value.",
          "Risk and liquidity: Assess margin processes, collateral availability, funding capacity and exposure management outside conventional hours.",
          "Operational resilience: Review staffing, automation, incident response, recovery arrangements and decision-making coverage.",
          "Ecosystem dependencies: Map the availability and readiness of CCPs, banks, payment systems, custodians and critical service providers.",
          "Economics and governance: Quantify the investment required, establish accountability and define the conditions under which implementation would make sense.",
        ],
      },
      {
        type: "p",
        text: "The output should be a clear view of readiness, the material gaps, the dependencies that need industry-wide resolution and the investment required to address them.",
      },
      {
        type: "p",
        text: "This provides a more useful basis for decision-making than a simple assessment of whether systems can technically support extended hours.",
      },
      {
        type: "h2",
        text: "The SureClear perspective",
      },
      {
        type: "p",
        text: "24/7 trading could reshape parts of the derivatives market, but its success will depend on more than the availability of electronic execution.",
      },
      {
        type: "p",
        text: "For banks and clearing members, the challenge is to reconcile the ambition of continuous markets with the practical realities of risk management, liquidity, settlement, operational resilience and commercial sustainability.",
      },
      {
        type: "p",
        text: "Those firms that begin by understanding their dependencies and testing their assumptions will be better placed to make informed decisions as the market evolves.",
      },
      {
        type: "quote",
        text: "The strategic question is not whether your clearing systems can run 24/7. It is whether your entire clearing operating model is ready — and whether the business case justifies the investment.",
      },
      {
        type: "p",
        text: "That is the conversation clearing leaders should be having now.",
      },
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

export function getRelatedInsights(slug: string, limit = 3) {
  return insightPosts.filter((post) => post.slug !== slug).slice(0, limit);
}
