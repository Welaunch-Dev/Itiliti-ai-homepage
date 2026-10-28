export function OutcomesSection() {
  return (
    <section data-screen-label="Outcomes" style={{ borderTop: "1px dashed #e3e3e3" }} id="outcomes">
      <div style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "180px 50px 175px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>OUTCOMES</div>
        <h2 style={{ margin: "30px 0 0", font: "500 62px/1.1 'Inter',sans-serif", letterSpacing: "-2px" }}>Measurable Business Outcomes</h2>
        <div style={{ marginTop: "72px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", border: "1px solid #e6e6e6" }}>
          <div style={{ padding: "55px 60px 60px", borderRight: "1px solid #e6e6e6" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div>
                <div className="type-stat-md" style={{ font: "300 46px 'Inter',sans-serif" }}>40%</div>
                <div style={{ font: "400 18px 'Inter',sans-serif", marginTop: "8px" }}>Reduction in document analysis time</div>
              </div>
              <div>
                <div className="type-stat-md" style={{ font: "300 46px 'Inter',sans-serif" }}>3x</div>
                <div style={{ font: "400 18px 'Inter',sans-serif", marginTop: "8px" }}>More potential investments evaluated</div>
              </div>
            </div>
            <img src="/images/outcomes-chart.png" style={{ width: "100%", marginTop: "130px" }} alt="" />
          </div>
          <div style={{ padding: "55px 60px 60px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "60px" }}>
            <div>
              <h3 style={{ margin: "0", font: "500 34px/1.2 'Inter',sans-serif", maxWidth: "640px" }}>“We’re now able to cover 3x more companies with the same research team, giving us a significant edge in identifying opportunities.”</h3>
              <p style={{ margin: "22px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>— Director of Research, Quant Hedge Fund</p>
            </div>
            <div>
              <div className="type-stat-xl" style={{ font: "300 80px 'Inter',sans-serif", letterSpacing: "-2px" }}>60%</div>
              <div style={{ font: "400 16px 'Inter',sans-serif", marginTop: "14px" }}>Increase in research coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
