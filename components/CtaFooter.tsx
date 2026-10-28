export function CtaFooter() {
  return (
    <section data-screen-label="CTA + Footer" style={{ background: "#000", color: "#fff" }} id="demo">
      <div style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #1e1e1e", borderRight: "1px dashed #1e1e1e" }}>
        <div style={{ padding: "150px 37px 170px", borderBottom: "1px dashed #1e1e1e", backgroundImage: "radial-gradient(#0f1a3d 1.2px,transparent 1.3px)", backgroundSize: "38px 38px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", alignItems: "start" }}>
          <h2 style={{ margin: "0", font: "500 62px/1.07 'Inter',sans-serif", letterSpacing: "-2px" }}>Ready to Reimagine What AI Can Do?</h2>
          <div>
            <p style={{ margin: "0", font: "400 19px/1.5 'Inter',sans-serif" }}>Experience the power of AI solutions built specifically for alternative investment. No commitment required.</p>
            <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
              <a href="#demo" style={{ background: "#fff", color: "#000", height: "50px", padding: "0 28px 0 10px", display: "flex", alignItems: "center", gap: "12px", font: "400 16px 'Inter',sans-serif" }}><span style={{ width: "30px", height: "30px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>⇢</span>SCHEDULE A DEMO</a>
              <a href="#services" style={{ border: "1px solid #fff", height: "50px", padding: "0 29px", display: "flex", alignItems: "center", font: "600 16px 'Inter',sans-serif" }}>EXPLORE SERVICES</a>
            </div>
          </div>
        </div>
        <div style={{ padding: "100px 37px 110px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", borderBottom: "1px dashed #1e1e1e" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
            <div>
              <img src="/images/logo.png" style={{ height: "44px", width: "auto", filter: "invert(1)" }} alt="ITILITI" />
              <p style={{ margin: "20px 0 0", font: "400 17px/1.4 'Inter',sans-serif", color: "#ccc", maxWidth: "390px" }}>Enterprise-grade AI solutions tailored for alternative investment firms.</p>
            </div>
            <div style={{ font: "400 16px 'Inter',sans-serif", color: "#bbb" }}>© 2025 <span style={{ color: "#fff" }}>ITILITI Technology Partners</span> LLC</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "20px", font: "400 18px 'Inter',sans-serif" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
              <div style={{ font: "600 16px 'Inter',sans-serif" }}>SOLUTIONS</div>
              <a href="#solutions" style={{ color: "#aaa" }}>Research</a>
              <a href="#solutions" style={{ color: "#aaa" }}>Due Diligence</a>
              <a href="#solutions" style={{ color: "#aaa" }}>Portfolio Analytics</a>
              <a href="#solutions" style={{ color: "#aaa" }}>Market Analysis</a>
              <a href="#solutions" style={{ color: "#aaa" }}>Compliance</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
              <div style={{ font: "600 16px 'Inter',sans-serif" }}>COMPANY</div>
              <a href="#outcomes" style={{ color: "#aaa" }}>Outcomes</a>
              <a href="#partners" style={{ color: "#aaa" }}>Partners</a>
              <a href="#about" style={{ color: "#aaa" }}>About</a>
              <a href="#" style={{ color: "#aaa" }}>Blog</a>
              <a href="#demo" style={{ color: "#aaa" }}>Demo</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
              <div style={{ font: "600 16px 'Inter',sans-serif" }}>NEW YORK HQ</div>
              <span style={{ color: "#aaa", lineHeight: "1.5" }}>156 East Main Street<br />Port Jefferson, NY 11777</span>
              <a href="tel:631-400-4299" style={{ color: "#aaa" }}>631.400.4299</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
              <div style={{ font: "600 16px 'Inter',sans-serif" }}>CHARLOTTE</div>
              <a href="tel:631-552-5048" style={{ color: "#aaa" }}>631.552.5048</a>
              <a href="mailto:info@itiliti.io" style={{ color: "#aaa" }}>info@itiliti.io</a>
            </div>
          </div>
        </div>
        <div style={{ padding: "80px 37px 40px", display: "flex", justifyContent: "center" }}>
          <img src="/images/logo.png" style={{ width: "100%", maxWidth: "1460px", height: "auto", filter: "invert(1)", opacity: ".9" }} alt="ITILITI" />
        </div>
      </div>
    </section>
  );
}
