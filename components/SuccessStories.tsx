"use client";

import { useState } from "react";

const STORIES = [
  {
    name: "Hedge Fund",
    aum: "$2.4B",
    headline: "Quantitative Strategy Enhancement",
    bio: "Leveraged AI to analyze 10x more data sources and identify non-obvious market patterns.",
  },
  {
    name: "Private Equity",
    aum: "$850M",
    headline: "Due Diligence Transformation",
    bio: "Reduced deal evaluation time by 65% while increasing the quality and depth of analysis.",
  },
  {
    name: "Family Office",
    aum: "$1.2B",
    headline: "Multi-Asset Portfolio Intelligence",
    bio: "Gained comprehensive visibility across diverse assets with AI-driven portfolio analytics.",
  },
] as const;

export function SuccessStories() {
  const [tab, setTab] = useState(0);
  const story = STORIES[tab];

  return (
    <section data-screen-label="Success Stories" style={{ background: "#000", color: "#fff" }} id="stories">
      <div style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "180px 50px 175px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "7px", height: "7px", background: "#3b6cf6" }}></span>SUCCESS STORIES</div>
        <h2 style={{ margin: "30px 0 0", font: "500 62px/1.1 'Inter',sans-serif", letterSpacing: "-2px", maxWidth: "900px" }}>How Alternative Investment Firms Transform with AI</h2>
        <a href="#" style={{ marginTop: "30px", display: "inline-flex", alignItems: "center", gap: "16px", border: "1px solid #2a2a2a", height: "53px", padding: "0 28px 0 16px", font: "600 16px 'Inter',sans-serif" }}>⇢ VIEW ALL CASE STUDIES</a>
        <div className="story-tabs" style={{ marginTop: "75px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", border: "1px solid #1e1e1e", borderBottom: "none" }}>
          {STORIES.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setTab(index)}
              style={{ background: "none", border: "none", borderRight: "1px solid #1e1e1e", borderBottom: index === tab ? "3px solid #fff" : "3px solid transparent", height: "68px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", font: "600 18px 'Inter',sans-serif", opacity: index === tab ? 1 : 0.55 }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="story-panel" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", border: "1px solid #1e1e1e", borderTop: "none", minHeight: "650px" }}>
          <div style={{ background: "url(\"/images/photo-office.png\") center/cover", minHeight: "320px" }}></div>
          <div style={{ padding: "36px 36px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", borderRight: "1px solid #1e1e1e" }}>
            <div className="type-story" style={{ font: "500 42px/1.15 'Inter',sans-serif", letterSpacing: "-1px", textWrap: "pretty" }}>{story.headline}</div>
            <div>
              <div className="type-stat" style={{ font: "300 56px 'Inter',sans-serif" }}>{story.aum}</div>
              <div style={{ font: "400 16px 'Inter',sans-serif", marginTop: "6px" }}>Assets under management</div>
            </div>
          </div>
          <div style={{ padding: "36px 38px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
            <div style={{ font: "500 18px 'Inter',sans-serif", color: "#9db6ff" }}>{story.name.toUpperCase()}</div>
            <div>
              <p style={{ margin: "0", font: "400 18px/1.55 'Inter',sans-serif" }}>{story.bio}</p>
              <a href="#" style={{ marginTop: "40px", display: "inline-flex", alignItems: "center", gap: "12px", font: "600 16px 'Inter',sans-serif" }}>⇢ READ CASE STUDY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
