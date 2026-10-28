export function TimelineSection() {
  return (
    <section data-screen-label="Timeline" style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "180px 50px 175px" }} id="timeline">
      <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>IMPLEMENTATION</div>
      <h2 style={{ margin: "30px 0 0", font: "500 62px/1.1 'Inter',sans-serif", letterSpacing: "-2px" }}>Results in Weeks, Not Months</h2>
      <div style={{ marginTop: "85px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderTop: "1px solid #e6e6e6", borderLeft: "1px solid #e6e6e6" }}>
        <div style={{ padding: "40px", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 18px 'Inter',sans-serif", color: "#1e4dff" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e4dff" }}></span>WEEK 1</div>
          <div>
            <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Discovery &amp; Requirements</div>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>Initial assessment and planning</p>
          </div>
        </div>
        <div style={{ padding: "40px", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 18px 'Inter',sans-serif", color: "#1e4dff" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e4dff" }}></span>WEEK 2</div>
          <div>
            <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Data Integration</div>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>Connect to your existing systems</p>
          </div>
        </div>
        <div style={{ padding: "40px", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 18px 'Inter',sans-serif", color: "#1e4dff" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e4dff" }}></span>WEEK 4</div>
          <div>
            <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Initial Deployment</div>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>First capabilities available</p>
          </div>
        </div>
        <div style={{ padding: "40px", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 18px 'Inter',sans-serif", color: "#1e4dff" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e4dff" }}></span>WEEK 6</div>
          <div>
            <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>User Training</div>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>Team onboarding and adoption</p>
          </div>
        </div>
        <div style={{ padding: "40px", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 18px 'Inter',sans-serif", color: "#1e4dff" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e4dff" }}></span>WEEK 8</div>
          <div>
            <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Full Implementation</div>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>All capabilities operational</p>
          </div>
        </div>
        <div style={{ padding: "40px", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", font: "500 18px 'Inter',sans-serif", color: "#1e4dff" }}><span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e4dff" }}></span>WEEK 12</div>
          <div>
            <div className="type-card" style={{ font: "500 32px 'Inter',sans-serif" }}>Optimization</div>
            <p style={{ margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif" }}>Refinement based on usage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
