export function HeroSection() {
  return (
    <section className="hero" data-screen-label="Hero" style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "0 50px" }} id="hero">
      <div className="hero-intro" style={{ paddingTop: "104px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "24px", height: "24px", background: "#1a2340", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "400 14px 'Inter',sans-serif" }}>✓</span>ENTERPRISE AI
    </div>
        <h1 style={{ margin: "30px 0 0", font: "500 84px/1.02 'Inter',sans-serif", letterSpacing: "-3.5px", maxWidth: "960px", textWrap: "balance" }}>Enterprise AI for Alternative Investment</h1>
        <p style={{ margin: "34px 0 0", font: "400 19px/1.55 'Inter',sans-serif", maxWidth: "830px", textWrap: "pretty" }}>Transform your investment strategies with enterprise-grade AI solutions tailored for alternative investment firms.</p>
        <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#solutions" style={{ border: "1px solid #ddd", padding: "0 33px", height: "53px", display: "flex", alignItems: "center", font: "600 16px 'Inter',sans-serif", justifyContent: "center", whiteSpace: "nowrap" }}>EXPLORE AI SOLUTIONS</a>
          <a href="#demo" style={{ background: "#000", color: "#fff", padding: "0 30px 0 18px", height: "53px", display: "flex", alignItems: "center", gap: "14px", whiteSpace: "nowrap", font: "600 16px 'Inter',sans-serif" }}>⇢ SCHEDULE A DEMO</a>
        </div>
      </div>
      <div className="hero-stage" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "30px", marginTop: "100px" }}>
        <div className="media-panel" style={{ position: "relative", minHeight: "700px", background: "url(\"/images/hero-analyst.png\") center/cover", overflow: "hidden" }}>
          <div className="glass-card" style={{ position: "absolute", left: "50%", top: "84px", transform: "translateX(-50%)", width: "500px", maxWidth: "calc(100% - 24px)", height: "532px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "12px" }}>
            <div style={{ background: "#fff", borderRadius: "8px", height: "100%", padding: "30px 30px 0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ font: "500 16px 'Inter',sans-serif" }}>AI ANALYST</div>
              <div style={{ marginTop: "22px", border: "1px solid #e6e6e6", height: "128px", padding: "20px", position: "relative", font: "400 17px 'Inter',sans-serif", color: "#555" }}>Analyze the risk factors in the latest quarterly report…
            <div style={{ position: "absolute", right: "18px", bottom: "18px", width: "40px", height: "40px", background: "#000", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "18px" }}>➢</div></div>
              <div style={{ marginTop: "28px", font: "400 14px 'Inter',sans-serif", color: "#666" }}>CAPABILITIES</div>
              <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif" }}><span style={{ width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>✦</span>INVESTMENT RESEARCH</div>
                <div style={{ background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif" }}><span style={{ width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>✦</span>DUE DILIGENCE</div>
                <div style={{ background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif" }}><span style={{ width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>✦</span>PORTFOLIO ANALYTICS</div>
                <div style={{ background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif" }}><span style={{ width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>✦</span>REGULATORY COMPLIANCE</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ aspectRatio: "514/700", background: "url(\"/images/hero-side.png\") center/cover" }}></div>
      </div>
      <div className="hero-logos" style={{ borderTop: "1px dashed #e3e3e3", margin: "0 -50px", padding: "56px 50px 70px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", font: "600 24px 'Inter',sans-serif", color: "#9a9a9a" }}>
        <span>Microsoft</span>
        <span>BlueFlame.ai</span>
        <span>ApexHQ.ai</span>
        <span>Direktiv.io</span>
        <span>archTIS</span>
      </div>
    </section>
  );
}
