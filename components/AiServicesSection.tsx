export function AiServicesSection() {
  return (
    <section data-screen-label="AI Services" style={{ background: "#000", color: "#fff" }} id="services">
      <div style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "180px 50px 140px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "7px", height: "7px", background: "#3b6cf6" }}></span>AI SERVICES</div>
        <h2 style={{ margin: "30px 0 0", font: "500 62px/1.06 'Inter',sans-serif", letterSpacing: "-2px", maxWidth: "980px" }}>Specialized Intelligence That Transforms Your Investment Workflow</h2>
        <div style={{ marginTop: "100px", border: "1px solid #1e1e1e" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderBottom: "1px solid #1e1e1e" }}>
            <div style={{ padding: "40px", borderRight: "1px solid #1e1e1e", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "340px", display: "flex", alignItems: "center" }}>
                <img src="/images/services-visual.png" style={{ width: "460px", maxWidth: "100%" }} alt="" />
              </div>
              <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Document Analysis &amp; Summarization</div>
              <p style={{ margin: "22px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#cfcfcf" }}>Extract key insights from research reports, SEC filings, and financial documents — 200+ pages per minute at 95% extraction accuracy.</p>
            </div>
            <div style={{ padding: "40px", borderRight: "1px solid #1e1e1e", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "340px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "28px", fontFamily: "'Inter',sans-serif" }}>
                <div style={{ width: "242px", border: "1px solid #2a3a7a", borderRadius: "4px", padding: "10px 12px", background: "#06070c" }}>
                  <div style={{ fontSize: "10px", color: "#999" }}>SOURCES</div>
                  <div style={{ fontSize: "15px", marginTop: "4px" }}>Earnings Calls &amp; News</div>
                </div>
                <div style={{ width: "1px", height: "33px", background: "#2a3a7a" }}></div>
                <div style={{ width: "242px", border: "1px solid #2a3a7a", borderRadius: "4px", padding: "10px 12px", background: "#06070c" }}>
                  <div style={{ fontSize: "10px", color: "#999" }}>ANALYZE</div>
                  <div style={{ fontSize: "15px", marginTop: "4px" }}>Sentiment Model</div>
                </div>
                <div style={{ width: "1px", height: "33px", background: "#2a3a7a" }}></div>
                <div style={{ width: "242px", border: "1px solid #3b55c8", borderRadius: "4px", padding: "10px 12px", background: "#06070c" }}>
                  <div style={{ fontSize: "10px", color: "#999" }}>SIGNAL</div>
                  <div style={{ fontSize: "15px", marginTop: "4px" }}>Market Signal Detected</div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", alignItems: "center", gap: "14px", fontSize: "10px", color: "#999" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b6cf6" }}></span>1000+ sources monitored daily</div>
              </div>
              <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Sentiment Analysis Engine</div>
              <p style={{ margin: "22px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#cfcfcf" }}>Detect sentiment patterns across earnings calls, news, and social media to identify market signals with 87% accuracy.</p>
            </div>
            <div style={{ padding: "40px", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "340px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "38px", gap: "20px", fontFamily: "'Inter',sans-serif" }}>
                <div style={{ width: "310px", maxWidth: "100%", border: "1px solid #1f2a5a", borderRadius: "4px", padding: "14px 12px", fontSize: "14px", background: "#05060b" }}>Entities mapped · 3-degree connections|</div>
                <div style={{ width: "310px", maxWidth: "100%", border: "1px solid #1a1a1a", borderRadius: "4px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", color: "#aaa", background: "#05060b" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}><span style={{ width: "28px", height: "28px", borderRadius: "4px", background: "#121626" }}></span>Companies</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}><span style={{ width: "28px", height: "28px", borderRadius: "4px", background: "#121626" }}></span>Executives</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}><span style={{ width: "28px", height: "28px", borderRadius: "4px", background: "#121626" }}></span>Funds &amp; Investors</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}><span style={{ width: "28px", height: "28px", borderRadius: "4px", background: "#121626" }}></span>Supply Chain Links</div>
                </div>
              </div>
              <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Entity &amp; Relationship Extraction</div>
              <p style={{ margin: "22px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#cfcfcf" }}>Identify key entities and their relationships across thousands of documents automatically, with a 92% identification rate.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", borderBottom: "1px solid #1e1e1e" }}>
            <div style={{ padding: "40px", borderRight: "1px solid #1e1e1e", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "385px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "30px", fontFamily: "'Inter',sans-serif", fontSize: "15px" }}>
                <div style={{ border: "1px solid #1e1e1e", padding: "14px 18px", borderRadius: "4px" }}>Rule Changes</div>
                <div style={{ width: "1px", height: "50px", background: "#2a3a7a" }}></div>
                <div style={{ border: "1px solid #3b55c8", background: "#08112e", padding: "14px 48px", borderRadius: "4px" }}>Regulatory Compliance AI</div>
                <div style={{ width: "1px", height: "50px", background: "#2a3a7a" }}></div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                  <div style={{ border: "1px solid #1e1e1e", padding: "12px 18px", borderRadius: "4px", color: "#ccc" }}>Monitoring</div>
                  <div style={{ border: "1px solid #1e1e1e", padding: "12px 18px", borderRadius: "4px", color: "#ccc" }}>Reporting</div>
                  <div style={{ border: "1px solid #1e1e1e", padding: "12px 18px", borderRadius: "4px", color: "#ccc" }}>Alerts</div>
                </div>
              </div>
              <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Regulatory Compliance AI</div>
              <p style={{ margin: "22px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#cfcfcf" }}>Stay ahead of regulatory requirements with AI that monitors rule changes and automates reporting — 99.5% requirement tracking, 24hr updates.</p>
            </div>
            <div style={{ padding: "40px", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "385px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 -28px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "20px", width: "100%", padding: "0 28px" }}>
                  <div style={{ border: "1px solid #1e1e1e", padding: "28px" }}>
                    <div className="type-stat" style={{ font: "300 56px 'Inter',sans-serif" }}>2–3 wks</div>
                    <div style={{ font: "400 16px 'Inter',sans-serif", color: "#aaa", marginTop: "10px" }}>Ahead of market</div>
                  </div>
                  <div style={{ border: "1px solid #1e1e1e", padding: "28px" }}>
                    <div className="type-stat" style={{ font: "300 56px 'Inter',sans-serif" }}>10,000+</div>
                    <div style={{ font: "400 16px 'Inter',sans-serif", color: "#aaa", marginTop: "10px" }}>Sources monitored daily</div>
                  </div>
                </div>
              </div>
              <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Market Trend Prediction Engine</div>
              <p style={{ margin: "22px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#cfcfcf" }}>Identify emerging trends before they’re obvious with AI that processes news and alternative data.</p>
            </div>
          </div>
          <div style={{ padding: "50px 0", overflow: "hidden", backgroundImage: "radial-gradient(#1c1c1c 1px,transparent 1px)", backgroundSize: "12px 12px", display: "flex", flexDirection: "column", gap: "16px", font: "400 19px 'Inter',sans-serif" }}>
            <div className="chip-row" style={{ display: "flex", gap: "20px", whiteSpace: "nowrap", marginLeft: "-60px" }}>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Research</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Due Diligence</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Portfolio</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Market Analysis</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Regulatory</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Document Analysis</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Sentiment</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Entity Extraction</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Risk Assessment</span>
            </div>
            <div className="chip-row" style={{ display: "flex", gap: "20px", whiteSpace: "nowrap" }}>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Portfolio Risk</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>SEC Filings</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Earnings Calls</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Research</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Alternative Data</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Compliance</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Due Diligence</span>
              <span style={{ padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000" }}>Market Trends</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
