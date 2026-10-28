"use client";

import { useState } from "react";

export function RoiCalculator() {
  const [team, setTeam] = useState(10);
  const [hours, setHours] = useState(20);
  const [salary, setSalary] = useState(150);
  const saved = Math.round(team * hours * 52 * 0.4);
  const savingsValue = Math.round(saved * ((salary * 1000) / 2080));
  const teamLabel = `${team} analysts`;
  const hoursLabel = `${hours} hrs/week`;
  const salaryLabel = `$${salary}k / year`;
  const hoursSaved = `${saved.toLocaleString("en-US")} hours`;
  const savings = `$${savingsValue.toLocaleString("en-US")}`;

  return (
    <section data-screen-label="ROI Calculator" style={{ borderTop: "1px dashed #e3e3e3" }} id="roi">
      <div style={{ maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "175px 50px 175px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,520px),1fr))", gap: "40px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", font: "500 18px 'Inter',sans-serif" }}><span style={{ width: "18px", height: "7px", background: "linear-gradient(90deg,#1e4dff,#9db6ff)" }}></span>ROI CALCULATOR</div>
          <h2 style={{ margin: "30px 0 0", font: "500 62px/1.07 'Inter',sans-serif", letterSpacing: "-2px" }}>Estimate Your Savings from AI Automation</h2>
          <p style={{ margin: "30px 0 0", font: "400 19px/1.5 'Inter',sans-serif", maxWidth: "520px" }}>Our AI solutions deliver tangible ROI with rapid implementation timelines and proven results.</p>
        </div>
        <div style={{ border: "1px solid #e6e6e6", alignSelf: "start" }}>
          <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "40px", borderBottom: "1px solid #e6e6e6" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", font: "400 18px 'Inter',sans-serif" }}>
                <span>Research Team Size</span>
                <span style={{ fontWeight: "700" }}>{teamLabel}</span>
              </div>
              <input type="range" min="1" max="30" step="1" value={team} onInput={(event) => setTeam(Number(event.currentTarget.value))} style={{ width: "100%", marginTop: "14px", accentColor: "#1e4dff" }} />
              <div style={{ display: "flex", justifyContent: "space-between", font: "400 16px 'Inter',sans-serif", color: "#888", marginTop: "6px" }}>
                <span>1</span>
                <span>15</span>
                <span>30</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", font: "400 18px 'Inter',sans-serif" }}>
                <span>Research Hours Per Week</span>
                <span style={{ fontWeight: "700" }}>{hoursLabel}</span>
              </div>
              <input type="range" min="5" max="40" step="1" value={hours} onInput={(event) => setHours(Number(event.currentTarget.value))} style={{ width: "100%", marginTop: "14px", accentColor: "#1e4dff" }} />
              <div style={{ display: "flex", justifyContent: "space-between", font: "400 16px 'Inter',sans-serif", color: "#888", marginTop: "6px" }}>
                <span>5</span>
                <span>20</span>
                <span>40</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", font: "400 18px 'Inter',sans-serif" }}>
                <span>Avg. Analyst Salary</span>
                <span style={{ fontWeight: "700" }}>{salaryLabel}</span>
              </div>
              <input type="range" min="75" max="250" step="5" value={salary} onInput={(event) => setSalary(Number(event.currentTarget.value))} style={{ width: "100%", marginTop: "14px", accentColor: "#1e4dff" }} />
              <div style={{ display: "flex", justifyContent: "space-between", font: "400 16px 'Inter',sans-serif", color: "#888", marginTop: "6px" }}>
                <span>$75k</span>
                <span>$150k</span>
                <span>$250k</span>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))" }}>
            <div style={{ padding: "36px 32px", borderRight: "1px solid #e6e6e6", containerType: "inline-size", minWidth: "0" }}>
              <div style={{ font: "400 16px 'Inter',sans-serif" }}>Annual Hours Saved</div>
              <div style={{ font: "300 clamp(28px,13cqw,52px)/1.1 'Inter',sans-serif", letterSpacing: "-1.5px", marginTop: "14px", whiteSpace: "nowrap" }}>{hoursSaved}</div>
            </div>
            <div style={{ padding: "36px 32px", background: "#000", color: "#fff", containerType: "inline-size", minWidth: "0" }}>
              <div style={{ font: "400 16px 'Inter',sans-serif" }}>Estimated Annual Savings</div>
              <div style={{ font: "300 clamp(28px,13cqw,52px)/1.1 'Inter',sans-serif", letterSpacing: "-1.5px", marginTop: "14px", whiteSpace: "nowrap" }}>{savings}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
