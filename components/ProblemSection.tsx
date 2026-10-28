export function ProblemSection() {
  return (
    <section data-screen-label="Problem" style={{ background: "#000", color: "#fff" }} id="about">
      <div style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "180px 50px 115px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "20px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>WHY ITILITI.AI</div>
          <h2 style={{ margin: "30px 0 0", font: "500 62px/1.07 'Inter',sans-serif", letterSpacing: "-2px", maxWidth: "1040px", textWrap: "balance" }}>Generative AI Reim<span style={{ color: "#6e6e6e" }}>agined for Alternative Investment — Beyond Generic Capabilities.</span></h2>
        </div>
        <div style={{ marginTop: "105px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", border: "1px solid #222" }}>
          <div style={{ minHeight: "450px", padding: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", borderRight: "1px solid #222" }}>
            <img src="/images/icon-domain.png" style={{ width: "115px", marginLeft: "-15px" }} alt="" />
            <div className="type-card" style={{ font: "500 33px 'Inter',sans-serif" }}>Custom-Trained on Investment Domain Knowledge</div>
          </div>
          <div style={{ minHeight: "450px", padding: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", borderRight: "1px solid #222" }}>
            <img src="/images/icon-documents.png" style={{ width: "120px", marginLeft: "-10px" }} alt="" />
            <div className="type-card" style={{ font: "500 33px 'Inter',sans-serif" }}>Specialized for Financial Document Understanding</div>
          </div>
          <div style={{ minHeight: "450px", padding: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
            <img src="/images/icon-guardrails.png" style={{ width: "115px", marginLeft: "-15px" }} alt="" />
            <div className="type-card" style={{ font: "500 33px 'Inter',sans-serif" }}>Enhanced with Industry-Specific Guardrails</div>
          </div>
        </div>
      </div>
    </section>
  );
}
