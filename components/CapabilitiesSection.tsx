export function CapabilitiesSection() {
  return (
    <section data-screen-label="Capabilities" style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "180px 50px 0" }} id="solutions">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>AI CAPABILITIES</div>
        <h2 style={{ margin: "30px 0 0", font: "500 62px/1.07 'Inter',sans-serif", letterSpacing: "-2px", maxWidth: "960px", textWrap: "balance" }}>AI That Transforms Every Aspect of the Investment Lifecycle</h2>
      </div>
      <div style={{ marginTop: "180px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "60px", alignItems: "center" }}>
        <div style={{ maxWidth: "510px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>INVESTMENT RESEARCH</div>
          <h3 style={{ margin: "24px 0 0", font: "500 44px/1.1 'Inter',sans-serif", letterSpacing: "-1px" }}>Investment Research Enhancement</h3>
          <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif" }}>Transform research productivity with AI that processes thousands of documents, earnings calls, and data sources to identify signals human analysts might miss.</p>
          <div style={{ marginTop: "52px", display: "flex", flexDirection: "column", gap: "28px", font: "400 19px 'Inter',sans-serif" }}>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Processes 100+ page documents in seconds</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Detects sentiment patterns across earnings calls</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Identifies non-obvious connections between companies</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Synthesizes insights from multiple data sources</div>
          </div>
          <a href="#" style={{ marginTop: "48px", display: "inline-flex", alignItems: "center", gap: "14px", border: "1px solid #ddd", height: "53px", padding: "0 26px 0 16px", font: "600 16px 'Inter',sans-serif", whiteSpace: "nowrap" }}>⇢ EXPLORE CAPABILITY</a>
        </div>
        <div className="media-panel" style={{ position: "relative", minHeight: "812px", background: "url(\"/images/photo-research.png\") center/cover", overflow: "hidden" }}>
          <div className="glass-card" style={{ position: "absolute", left: "50%", top: "100px", transform: "translateX(-50%)", width: "600px", maxWidth: "calc(100% - 24px)", minWidth: "min(480px,100%)", height: "611px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px" }}>
            <div style={{ background: "#fff", borderRadius: "8px", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "22px 30px", borderBottom: "1px solid #eee", font: "500 16px 'Inter',sans-serif" }}>INTERACTIVE AI DEMO</div>
              <div style={{ flex: "1", padding: "30px 30px 0", display: "flex", flexDirection: "column", gap: "20px", font: "400 16px/1.7 'Inter',sans-serif" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
                  <span style={{ width: "36px", height: "36px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", borderRadius: "3px" }}>✦</span>
                  <div style={{ border: "1px solid #f0f0f0", padding: "12px 16px", maxWidth: "330px" }}>Hi! Ask me about any filing, report, or data source.</div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", gap: "12px" }}>
                  <div style={{ background: "#000", color: "#fff", padding: "12px 14px", borderRadius: "4px", maxWidth: "326px", fontWeight: "500" }}>Analyze the risk factors in the latest quarterly report for ACME Corp.</div>
                  <img src="/images/avatar.png" style={{ width: "36px", height: "36px", objectFit: "cover" }} alt="" />
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
                  <span style={{ width: "36px", height: "36px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", borderRadius: "3px" }}>✦</span>
                  <div style={{ border: "1px solid #cfe0ff", padding: "14px 16px", width: "330px", borderRadius: "4px" }}>Key risks in ACME Q3 2024<div style={{ borderLeft: "1px solid #ddd", margin: "10px 0", paddingLeft: "14px", fontSize: "14px", color: "#777", lineHeight: "1.8" }}>Supply chain delays up 15% (p.12–14)<br />EU regulatory impact: 5–8% of Q4 revenue</div>Cash reserves up 12%</div>
                </div>
              </div>
              <div style={{ margin: "22px 30px 24px", border: "1px solid #eee", height: "62px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px 0 24px", font: "400 17px 'Inter',sans-serif", color: "#888" }}>Ask about a document...<span style={{ width: "40px", height: "40px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px" }}>➢</span></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "175px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "60px", alignItems: "center" }}>
        <div className="media-panel" style={{ position: "relative", minHeight: "813px", background: "url(\"/images/photo-office.png\") center/cover", overflow: "hidden" }}>
          <div className="glass-card" style={{ position: "absolute", left: "50%", top: "154px", transform: "translateX(-50%)", width: "599px", maxWidth: "calc(100% - 24px)", minWidth: "min(440px,100%)", height: "503px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px" }}>
            <div style={{ background: "#fff", borderRadius: "8px", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              <div style={{ padding: "22px 30px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ font: "500 16px 'Inter'" }}>DUE DILIGENCE · RUNNING</span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#666" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3b6cf6" }}></span>Data room review</span>
              </div>
              <div style={{ flex: "1", padding: "30px 30px 0", display: "flex", flexDirection: "column", gap: "30px", fontSize: "17px", position: "relative" }}>
                <div style={{ position: "absolute", left: "42px", top: "44px", height: "220px", width: "1px", background: "#3b6cf6" }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>Ingest data room documents</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>Extract key terms &amp; financials</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>Automated risk assessment</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative", color: "#999" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ccc" }}></span>
</span>Flag issues for review</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative", color: "#999" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ccc" }}></span>
</span>Generate diligence report</div>
              </div>
              <div style={{ borderTop: "1px solid #eee", padding: "20px 30px 26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "17px", fontWeight: "500" }}>
                  <span>PROGRESS</span>
                  <span>60%</span>
                </div>
                <div style={{ marginTop: "12px", height: "6px", background: "#eee", borderRadius: "3px" }}>
                  <div style={{ width: "60%", height: "100%", background: "#000", borderRadius: "3px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "500px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>DUE DILIGENCE</div>
          <h3 style={{ margin: "24px 0 0", font: "500 44px/1.1 'Inter',sans-serif", letterSpacing: "-1px" }}>Due Diligence Acceleration</h3>
          <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif" }}>Streamline document-heavy due diligence by automatically extracting key data points from contracts, financial statements, and regulatory filings.</p>
          <div style={{ marginTop: "52px", display: "flex", flexDirection: "column", gap: "28px", font: "400 19px 'Inter',sans-serif" }}>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Extracts key terms from legal documents</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Flags inconsistencies across deal documentation</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Automates financial statement analysis</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Creates comprehensive risk assessment reports</div>
          </div>
          <a href="#" style={{ marginTop: "48px", display: "inline-flex", alignItems: "center", gap: "14px", border: "1px solid #ddd", height: "53px", padding: "0 26px 0 16px", font: "600 16px 'Inter',sans-serif", whiteSpace: "nowrap" }}>⇢ EXPLORE CAPABILITY</a>
        </div>
      </div>
      <div style={{ marginTop: "175px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "60px", alignItems: "center" }}>
        <div style={{ maxWidth: "510px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>PORTFOLIO ANALYTICS</div>
          <h3 style={{ margin: "24px 0 0", font: "500 44px/1.1 'Inter',sans-serif", letterSpacing: "-1px" }}>Portfolio Analytics</h3>
          <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif" }}>Enhance portfolio insights with advanced analytics that discover hidden patterns, assess risk exposure, and identify optimization opportunities.</p>
          <div style={{ marginTop: "52px", display: "flex", flexDirection: "column", gap: "28px", font: "400 19px 'Inter',sans-serif" }}>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Multi-factor correlation analysis</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Automated performance attribution</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Scenario modeling with ML predictions</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Custom benchmarking with adaptive metrics</div>
          </div>
          <a href="#" style={{ marginTop: "48px", display: "inline-flex", alignItems: "center", gap: "14px", border: "1px solid #ddd", height: "53px", padding: "0 26px 0 16px", font: "600 16px 'Inter',sans-serif", whiteSpace: "nowrap" }}>⇢ EXPLORE CAPABILITY</a>
        </div>
        <div className="media-panel" style={{ position: "relative", minHeight: "812px", background: "url(\"/images/photo-portfolio.png\") center/cover", overflow: "hidden" }}>
          <div className="glass-card" style={{ position: "absolute", left: "50%", top: "137px", transform: "translateX(-50%)", width: "598px", maxWidth: "calc(100% - 24px)", minWidth: "min(460px,100%)", height: "537px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px" }}>
            <div style={{ background: "#fff", borderRadius: "8px", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              <div style={{ padding: "22px 25px", borderBottom: "1px solid #eee", font: "500 16px 'Inter'" }}>PORTFOLIO OVERVIEW</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", borderBottom: "1px solid #eee" }}>
                <div style={{ padding: "18px 20px", borderRight: "1px solid #eee" }}>
                  <div style={{ fontSize: "17px", fontWeight: "500" }}>125+</div>
                  <div style={{ fontSize: "13px", marginTop: "4px" }}>Risk Factors</div>
                </div>
                <div style={{ padding: "18px 20px", borderRight: "1px solid #eee" }}>
                  <div style={{ fontSize: "17px", fontWeight: "500" }}>18%</div>
                  <div style={{ fontSize: "13px", marginTop: "4px" }}>Risk-Adj. Return</div>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "500" }}>87%</div>
                  <div style={{ fontSize: "13px", marginTop: "4px" }}>Correlation Acc.</div>
                </div>
              </div>
              <div style={{ padding: "24px 28px 0" }}>
                <div style={{ height: "100px", display: "flex", alignItems: "flex-end", gap: "8px" }}>
                  <div style={{ flex: "1", height: "40%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "65%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "45%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "79%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "55%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "89%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "70%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "94%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "60%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "84%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "74%", background: "#000" }}></div>
                  <div style={{ flex: "1", height: "100%", background: "#000" }}></div>
                </div>
                <div style={{ fontSize: "13px", marginTop: "12px", paddingBottom: "20px", borderBottom: "1px solid #f2f2f2" }}>Risk signals — last 12 months</div>
              </div>
              <div style={{ padding: "0 25px", fontSize: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "55px", borderBottom: "1px solid #f2f2f2" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#1ed760" }}></span>Market Trend Engine</span>
                  <span style={{ fontSize: "13px" }}>2–3 wks ahead</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "55px", borderBottom: "1px solid #f2f2f2" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#1ed760" }}></span>Sentiment Engine</span>
                  <span style={{ fontSize: "13px" }}>1000+ sources</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "55px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#1ed760" }}></span>Compliance AI</span>
                  <span style={{ fontSize: "13px" }}>99.5% tracked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "175px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "60px", alignItems: "center" }}>
        <div style={{ maxWidth: "510px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>MARKET ANALYSIS</div>
          <h3 style={{ margin: "24px 0 0", font: "500 44px/1.1 'Inter',sans-serif", letterSpacing: "-1px" }}>Market Trend Analysis</h3>
          <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif" }}>Identify emerging trends before they’re obvious with AI that processes news, social media, and alternative data to gain market insights.</p>
          <div style={{ marginTop: "52px", display: "flex", flexDirection: "column", gap: "28px", font: "400 19px 'Inter',sans-serif" }}>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Real-time sentiment analysis of news and social media</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Pattern detection across disparate data sources</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Sector rotation prediction with confidence scoring</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Automated alert system for anomaly detection</div>
          </div>
          <a href="#" style={{ marginTop: "48px", display: "inline-flex", alignItems: "center", gap: "14px", border: "1px solid #ddd", height: "53px", padding: "0 26px 0 16px", font: "600 16px 'Inter',sans-serif", whiteSpace: "nowrap" }}>⇢ EXPLORE CAPABILITY</a>
        </div>
        <div className="media-panel" style={{ position: "relative", minHeight: "812px", background: "url(\"/images/photo-research.png\") center/cover", overflow: "hidden" }}>
          <div className="glass-card" style={{ position: "absolute", left: "50%", top: "100px", transform: "translateX(-50%)", width: "600px", maxWidth: "calc(100% - 24px)", minWidth: "min(480px,100%)", height: "611px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px" }}>
            <div style={{ background: "#fff", borderRadius: "8px", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              <div style={{ padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ font: "500 16px 'Inter'" }}>MARKET SIGNALS</span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#666" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3b6cf6" }}></span>Live</span>
              </div>
              <div style={{ padding: "30px 28px 28px" }}>
                <div style={{ fontSize: "13px", color: "#666" }}>SECTOR ROTATION FORECAST</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "10px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "500" }}>Energy → Industrials</span>
                  <span style={{ fontSize: "14px" }}>Confidence 82%</span>
                </div>
                <div style={{ marginTop: "12px", height: "6px", background: "#eee", borderRadius: "3px" }}>
                  <div style={{ width: "82%", height: "100%", background: "#000", borderRadius: "3px" }}></div>
                </div>
              </div>
              <div style={{ marginTop: "auto", borderTop: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderBottom: "1px solid #f2f2f2", fontSize: "15px" }}>
                  <span>News sentiment · Semiconductors</span>
                  <span style={{ fontSize: "13px", padding: "4px 10px", borderRadius: "3px", background: "#e5f7ec", fontWeight: "500" }}>Positive</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderBottom: "1px solid #f2f2f2", fontSize: "15px" }}>
                  <span>Social volume spike · Regional banks</span>
                  <span style={{ fontSize: "13px", padding: "4px 10px", borderRadius: "3px", background: "#fdecec", fontWeight: "500" }}>Anomaly</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderBottom: "1px solid #f2f2f2", fontSize: "15px" }}>
                  <span>Shipping data · Consumer retail</span>
                  <span style={{ fontSize: "13px", padding: "4px 10px", borderRadius: "3px", background: "#e8eeff", fontWeight: "500" }}>Pattern</span>
                </div>
                <div style={{ padding: "18px 28px", fontSize: "13px", color: "#666" }}>Sources: news, social media, alternative data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "175px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "60px", alignItems: "center" }}>
        <div className="media-panel" style={{ position: "relative", minHeight: "812px", background: "url(\"/images/photo-office.png\") center/cover", overflow: "hidden" }}>
          <div className="glass-card" style={{ position: "absolute", left: "50%", top: "154px", transform: "translateX(-50%)", width: "599px", maxWidth: "calc(100% - 24px)", minWidth: "min(480px,100%)", height: "503px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px" }}>
            <div style={{ background: "#fff", borderRadius: "8px", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Inter',sans-serif" }}>
              <div style={{ padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ font: "500 16px 'Inter'" }}>COMPLIANCE MONITOR</span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#666" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3b6cf6" }}></span>SEC · FINRA</span>
              </div>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>✓</span>Rule change detected: SEC Form PF amendments</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>✓</span>Gap analysis against current controls</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>✓</span>Documents verified by AI</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px", color: "#999" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ccc" }}></span>
</span>Draft filing from pre-built template</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px", color: "#999" }}><span style={{ width: "25px", height: "25px", borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ccc" }}></span>
</span>Submit for compliance officer review</div>
              </div>
              <div style={{ marginTop: "auto", borderTop: "1px solid #eee", padding: "20px 28px 26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: "500" }}>
                  <span>GAPS FOUND</span>
                  <span>2 of 48 controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "510px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>REGULATORY</div>
          <h3 style={{ margin: "24px 0 0", font: "500 44px/1.1 'Inter',sans-serif", letterSpacing: "-1px" }}>Regulatory Compliance AI</h3>
          <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif" }}>Stay ahead of regulatory requirements with AI that monitors rule changes, identifies compliance gaps, and automates reporting.</p>
          <div style={{ marginTop: "52px", display: "flex", flexDirection: "column", gap: "28px", font: "400 19px 'Inter',sans-serif" }}>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Continuous monitoring of regulatory changes</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Automated gap analysis against current controls</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>Pre-built templates for SEC, FINRA filings</div>
            <div style={{ display: "flex", gap: "22px" }}><span>→</span>AI-powered document verification</div>
          </div>
          <a href="#" style={{ marginTop: "48px", display: "inline-flex", alignItems: "center", gap: "14px", border: "1px solid #ddd", height: "53px", padding: "0 26px 0 16px", font: "600 16px 'Inter',sans-serif", whiteSpace: "nowrap" }}>⇢ EXPLORE CAPABILITY</a>
        </div>
      </div>
      <div style={{ height: "175px" }}></div>
    </section>
  );
}
