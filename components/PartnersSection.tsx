export function PartnersSection() {
  return (
    <section data-screen-label="Partners" style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "150px 50px 175px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,520px),1fr))", gap: "40px" }} id="partners">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>PARTNERS</div>
        <h2 style={{ margin: "30px 0 0", font: "500 62px/1.07 'Inter',sans-serif", letterSpacing: "-2px" }}>Powered by Industry Leaders</h2>
        <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif", maxWidth: "520px" }}>We partner with premier AI technology providers to deliver cutting-edge solutions tailored for alternative investment.</p>
        <a href="#" style={{ marginTop: "36px", display: "inline-flex", alignItems: "center", gap: "16px", border: "1px solid #ddd", height: "53px", padding: "0 28px 0 16px", font: "600 16px 'Inter',sans-serif" }}>⇢ EXPLORE PARTNERSHIP</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", border: "1px solid #e6e6e6", alignSelf: "start", containerType: "inline-size" }}>
        <div style={{ padding: "28px 28px 30px", minHeight: "340px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", borderRight: "1px solid #e6e6e6" }}>
          <img src="/images/icon-microsoft.png" style={{ width: "52px" }} alt="" />
          <div>
            <div style={{ font: "500 clamp(22px,2.6cqw,30px)/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", overflowWrap: "break-word", textWrap: "balance" }}>Microsoft</div>
            <p style={{ margin: "16px 0 0", font: "400 17px/1.5 'Inter',sans-serif", overflowWrap: "break-word" }}>Enterprise AI solutions powered by Azure OpenAI and Microsoft Copilot.</p>
          </div>
        </div>
        <div style={{ padding: "28px 28px 30px", minHeight: "340px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", borderRight: "1px solid #e6e6e6" }}>
          <img src="/images/icon-infrastructure.png" style={{ width: "52px" }} alt="" />
          <div>
            <div style={{ font: "500 clamp(22px,2.6cqw,30px)/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", overflowWrap: "break-word", textWrap: "balance" }}>Enterprise-Grade Infrastructure</div>
            <p style={{ margin: "16px 0 0", font: "400 17px/1.5 'Inter',sans-serif", overflowWrap: "break-word" }}>Accelerating AI adoption with secure, scalable foundations.</p>
          </div>
        </div>
        <div style={{ padding: "28px 28px 30px", minHeight: "340px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
          <img src="/images/icon-integration.png" style={{ width: "52px" }} alt="" />
          <div>
            <div style={{ font: "500 clamp(22px,2.6cqw,30px)/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", overflowWrap: "break-word", textWrap: "balance" }}>Seamless Integration</div>
            <p style={{ margin: "16px 0 0", font: "400 17px/1.5 'Inter',sans-serif", overflowWrap: "break-word" }}>BlueFlame.ai, ApexHQ.ai, Direktiv.io and archTIS work with your existing systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
