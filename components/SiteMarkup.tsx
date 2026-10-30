"use client";

import { Fragment } from "react";

type RouteFlags = {
  home: boolean;
  ai: boolean;
  it: boolean;
  how: boolean;
  about: boolean;
};

type RunItem = {
  q: string;
  a: string;
  num: string;
  open: boolean;
  icon: string;
  toggle: () => void;
};

type TeamTab = {
  tab: string;
  line: string;
  opacity: number;
  select: () => void;
};

type Person = { name: string; ini: string; role: string };

type Team = {
  count: string;
  unit: string;
  title: string;
  kicker: string;
  note: string;
  people: Person[];
};

export function SiteMarkup({
  r,
  navc,
  menu,
  openMenu,
  closeMenu,
  runs,
  teamTabs,
  team,
}: {
  r: RouteFlags;
  navc: RouteFlags extends never ? never : { home: string; ai: string; it: string; how: string; about: string };
  menu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  runs: RunItem[];
  teamTabs: TeamTab[];
  team: Team;
}) {
  return (
    <>
    <div className="top-banner" style={{background: "#000", color: "#cfcfcf", font: "500 16px 'Inter',sans-serif", minHeight: "38px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "0 16px", textAlign: "center"}}>
      {"IT, security and AI for growing companies "}
      <span style={{fontSize: "15px"}}>
        {"⇢"}
      </span>
    </div>
    <header style={{borderBottom: "1px dashed #e3e3e3"}}>
      <div style={{maxWidth: "1600px", margin: "0 auto", height: "clamp(68px,6.4vw,92px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(20px,3vw,68px)", padding: "0 clamp(20px,3vw,50px)", whiteSpace: "nowrap"}}>
        <a style={{display: "flex", alignItems: "center", flexShrink: "0", minHeight: "44px", color: navc.home}} href={"#home"}>
          <img style={{height: "clamp(28px,2.6vw,38px)", width: "auto"}} src={"/images/9f156f4b-1743-4a0d-9192-aba1eb7ea983.png"} alt={"iTILITi"} />
        </a>
        <div className="nav-desktop">
          <nav style={{display: "flex", gap: "clamp(18px,2.5vw,48px)", font: "400 18px 'Inter',sans-serif", flex: "1", minWidth: "0"}}>
            <a style={{color: navc.ai}} href={"#ai"}>
              {"AI services"}
            </a>
            <a style={{color: navc.it}} href={"#it"}>
              {"IT and security"}
            </a>
            <a style={{color: navc.how}} href={"#how"}>
              {"How we work"}
            </a>
            <a style={{color: navc.about}} href={"#about"}>
              {"About"}
            </a>
          </nav>
          <a style={{background: "#000", color: "#fff", font: "600 16px 'Inter',sans-serif", padding: "11px 18px", letterSpacing: "0.2px"}} href={"#contact"}>
            {"BOOK A CALL"}
          </a>
        </div>
        <div className="nav-mobile-only">
          <button style={{width: "44px", height: "44px", border: "1px solid #ddd", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", cursor: "pointer", padding: "0"}} onClick={openMenu} aria-label={"Open menu"}>
            <span style={{width: "18px", height: "1.5px", background: "#0a0a0a"}} />
            <span style={{width: "18px", height: "1.5px", background: "#0a0a0a"}} />
          </button>
        </div>
      </div>
    </header>
    {menu ? (
      <>
      <div className="nav-mobile-menu" style={{position: "fixed", inset: "0", zIndex: "100", background: "#fff", display: "flex", flexDirection: "column", padding: "0 20px 28px", overflowY: "auto"}}>
        <div style={{height: "68px", flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px dashed #e3e3e3", margin: "0 -20px", padding: "0 20px"}}>
          <img style={{height: "28px", width: "auto"}} src={"/images/9f156f4b-1743-4a0d-9192-aba1eb7ea983.png"} alt={"iTILITi"} />
          <button style={{width: "44px", height: "44px", border: "1px solid #ddd", background: "#fff", cursor: "pointer", font: "300 26px/1 'Inter',sans-serif", color: "#0a0a0a", padding: "0"}} onClick={closeMenu} aria-label={"Close menu"}>
            {"×"}
          </button>
        </div>
        <nav style={{marginTop: "28px", display: "flex", flexDirection: "column", borderTop: "1px solid #eee"}}>
          <a style={{padding: "20px 0", borderBottom: "1px solid #eee", font: "500 28px 'Inter',sans-serif", letterSpacing: "-0.02em", display: "flex", justifyContent: "space-between", alignItems: "center", color: navc.home}} href={"#home"} onClick={closeMenu}>
            {"Home"}
            <span style={{fontSize: "20px"}}>
              {"→"}
            </span>
          </a>
          <a style={{padding: "20px 0", borderBottom: "1px solid #eee", font: "500 28px 'Inter',sans-serif", letterSpacing: "-0.02em", display: "flex", justifyContent: "space-between", alignItems: "center", color: navc.ai}} href={"#ai"} onClick={closeMenu}>
            {"AI services"}
            <span style={{fontSize: "20px"}}>
              {"→"}
            </span>
          </a>
          <a style={{padding: "20px 0", borderBottom: "1px solid #eee", font: "500 28px 'Inter',sans-serif", letterSpacing: "-0.02em", display: "flex", justifyContent: "space-between", alignItems: "center", color: navc.it}} href={"#it"} onClick={closeMenu}>
            {"IT and security"}
            <span style={{fontSize: "20px"}}>
              {"→"}
            </span>
          </a>
          <a style={{padding: "20px 0", borderBottom: "1px solid #eee", font: "500 28px 'Inter',sans-serif", letterSpacing: "-0.02em", display: "flex", justifyContent: "space-between", alignItems: "center", color: navc.how}} href={"#how"} onClick={closeMenu}>
            {"How we work"}
            <span style={{fontSize: "20px"}}>
              {"→"}
            </span>
          </a>
          <a style={{padding: "20px 0", borderBottom: "1px solid #eee", font: "500 28px 'Inter',sans-serif", letterSpacing: "-0.02em", display: "flex", justifyContent: "space-between", alignItems: "center", color: navc.about}} href={"#about"} onClick={closeMenu}>
            {"About"}
            <span style={{fontSize: "20px"}}>
              {"→"}
            </span>
          </a>
        </nav>
        <div style={{marginTop: "auto", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "12px"}}>
          <a style={{background: "#000", color: "#fff", minHeight: "56px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", font: "600 16px 'Inter',sans-serif"}} href={"#contact"} onClick={closeMenu}>
            {"⇢ BOOK A CALL"}
          </a>
          <a style={{border: "1px solid #ddd", minHeight: "56px", display: "flex", alignItems: "center", justifyContent: "center", font: "600 16px 'Inter',sans-serif"}} href={"mailto:darren@itiliti.io"}>
            {"EMAIL US"}
          </a>
        </div>
      </div>
      </>
    ) : null}
    {r.home ? (
      <>
      <section style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "0 clamp(23px,3.47vw,50px)"}} data-screen-label={"Hero"}>
        <div style={{paddingTop: "104px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
          <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
            <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
            <span style={{textWrap: "balance", textAlign: "left"}}>
              {"IT, SECURITY AND AI FOR GROWING COMPANIES"}
            </span>
          </div>
          <h1 style={{margin: "30px 0 0", font: "500 clamp(50px,6.67vw,96px)/1 'Inter',sans-serif", letterSpacing: "-0.042em", maxWidth: "1000px", textWrap: "balance"}}>
            {"Real people. Real AI."}
          </h1>
          <p style={{margin: "34px 0 0", font: "400 19px/1.55 'Inter',sans-serif", maxWidth: "800px", textWrap: "pretty"}}>
            {"Everything a growing company needs from technology: IT operations, security, leadership, data and AI. Run by senior people who know your name, on an AI platform built for how your business works."}
          </p>
          <div style={{display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center"}}>
            <a style={{background: "#000", color: "#fff", padding: "12px 30px 12px 18px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#contact"}>
              {"⇢ BOOK A CALL"}
            </a>
            <a style={{border: "1px solid #ddd", padding: "0 clamp(16px,2.29vw,33px)", height: "53px", display: "flex", alignItems: "center", font: "600 16px 'Inter',sans-serif", whiteSpace: "nowrap"}} href={"#ai"}>
              {"SEE WHAT WE DELIVER"}
            </a>
          </div>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "30px", marginTop: "clamp(45px,6.94vw,100px)"}}>
          <div className="hero-photo" style={{position: "relative", minHeight: "clamp(640px,48.6vw,700px)", background: "url(\"/images/fa941d84-3d5d-46db-88b4-812f6aa60797.png\") center/cover", overflow: "hidden"}}>
            <div style={{position: "absolute", left: "50%", top: "84px", transform: "translateX(-50%)", width: "500px", maxWidth: "calc(100% - 24px)", height: "532px", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "12px"}}>
              <div style={{background: "#fff", borderRadius: "8px", height: "100%", padding: "30px 30px 0", overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: "'Inter',sans-serif"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 16px 'Inter'"}}>
                  <span>
                    {"YOUR ITILITI TEAM"}
                  </span>
                  <span style={{display: "flex", alignItems: "center", gap: "8px", font: "400 14px 'Inter'", color: "#666"}}>
                    <span style={{width: "9px", height: "9px", borderRadius: "50%", background: "#1ed760"}} />
                    {"Online"}
                  </span>
                </div>
                <div style={{marginTop: "22px", border: "1px solid #e6e6e6", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px"}}>
                  <span style={{width: "40px", height: "40px", borderRadius: "50%", background: "#1a2340", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "500 14px 'Inter'", flexShrink: "0"}}>
                    {"DA"}
                  </span>
                  <div>
                    <div style={{font: "500 16px 'Inter'"}}>
                      {"Darren Augi"}
                    </div>
                    <div style={{font: "400 14px 'Inter'", color: "#666", marginTop: "3px"}}>
                      {"Answering in under 20 min"}
                    </div>
                  </div>
                </div>
                <div style={{marginTop: "28px", font: "400 14px 'Inter'", color: "#666"}}>
                  {"WHAT WE RUN FOR YOU"}
                </div>
                <div style={{marginTop: "14px", display: "flex", flexDirection: "column", gap: "12px"}}>
                  <div style={{background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif"}}>
                    <span style={{width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                      {"✦"}
                    </span>
                    {"MANAGED IT"}
                  </div>
                  <div style={{background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif"}}>
                    <span style={{width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                      {"✦"}
                    </span>
                    {"SECURITY"}
                  </div>
                  <div style={{background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif"}}>
                    <span style={{width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                      {"✦"}
                    </span>
                    {"LEADERSHIP: CXO AND CXAI"}
                  </div>
                  <div style={{background: "#f5f5f5", height: "44px", display: "flex", alignItems: "center", gap: "14px", padding: "0 10px", font: "500 15px 'Inter',sans-serif"}}>
                    <span style={{width: "25px", height: "25px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                      {"✦"}
                    </span>
                    {"DATA AND AI"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{aspectRatio: "514/700", background: "url(\"/images/9f21ef8f-f586-4643-8a3b-b5828d6f55c0.png\") center/cover"}} />
        </div>
        <div style={{borderTop: "1px dashed #e3e3e3", margin: "0 calc(-1 * clamp(22px,3.47vw,50px))", padding: "clamp(25px,3.89vw,56px) clamp(23px,3.47vw,50px) clamp(32px,4.86vw,70px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", font: "600 24px 'Inter',sans-serif", color: "#9a9a9a"}}>
          <span>
            {"Managed IT"}
          </span>
          <span>
            {"Security"}
          </span>
          <span>
            {"Leadership"}
          </span>
          <span>
            {"Data"}
          </span>
          <span>
            {"Custom AI"}
          </span>
          <span>
            {"Copilot"}
          </span>
        </div>
      </section>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"Who we serve"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
            <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
            {"WHO WE SERVE"}
          </div>
          <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "980px", textWrap: "balance"}}>
            {"Our clients, and where we focus."}
          </h2>
          <div style={{marginTop: "clamp(32px,5.00vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", border: "1px solid #e6e6e6"}}>
            <div style={{padding: "clamp(25px,3.82vw,55px) clamp(27px,4.17vw,60px) clamp(27px,4.17vw,60px)", borderRight: "1px solid #e6e6e6", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "clamp(32px,5.56vw,80px)"}}>
              <div>
                <div style={{font: "300 clamp(50px,6.67vw,96px)/1 'Inter',sans-serif", letterSpacing: "-0.042em"}}>
                  {"10–200"}
                </div>
                <div style={{marginTop: "18px", font: "500 22px 'Inter',sans-serif"}}>
                  {"Employees"}
                </div>
                <p style={{margin: "12px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444", maxWidth: "440px"}}>
                  {"Growing companies with real operations and no large IT or data team."}
                </p>
              </div>
              <div>
                <div style={{position: "relative", height: "56px", background: "repeating-linear-gradient(90deg,#e6e6e6 0 1px,transparent 1px 10%)"}}>
                  <div style={{position: "absolute", left: "4%", right: "0", top: "14px", bottom: "14px", background: "linear-gradient(90deg,#9db6ff,#1e4dff)"}} />
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "12px", font: "400 14px 'Inter',sans-serif", color: "#888"}}>
                  <span>
                    {"1"}
                  </span>
                  <span>
                    {"50"}
                  </span>
                  <span>
                    {"100"}
                  </span>
                  <span>
                    {"150"}
                  </span>
                  <span>
                    {"200"}
                  </span>
                </div>
              </div>
            </div>
            <div style={{padding: "20px clamp(27px,4.17vw,60px)"}}>
              <div style={{padding: "clamp(16px,2.50vw,36px) 0"}}>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Portfolio ready."}
                </div>
                <p style={{margin: "14px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444"}}>
                  {"Built for private equity owned companies and alternative investment firms. We run their technology day to day."}
                </p>
              </div>
              <div style={{padding: "clamp(16px,2.50vw,36px) 0", borderTop: "1px solid #e6e6e6"}}>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Spend control."}
                </div>
                <p style={{margin: "14px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444"}}>
                  {"SaaS and vendor management, license reclaim and one standard stack across the portfolio."}
                </p>
              </div>
              <div style={{padding: "clamp(16px,2.50vw,36px) 0", borderTop: "1px solid #e6e6e6"}}>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"AI with oversight."}
                </div>
                <p style={{margin: "14px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444"}}>
                  {"AI governance, usage tracking, shadow AI discovery and a readiness review before anything goes live."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{background: "#000", color: "#fff"}} data-screen-label={"Why companies switch"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(52px,7.99vw,115px)"}}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
              <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
              {"WHY COMPANIES SWITCH"}
            </div>
            <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "1040px", textWrap: "balance"}}>
              {"Most providers give you a ticket number. "}
              <span style={{color: "#6e6e6e"}}>
                {"We give you a person."}
              </span>
            </h2>
          </div>
          <div style={{marginTop: "clamp(47px,7.29vw,105px)", borderTop: "1px solid #222", borderLeft: "1px solid #222"}}>
            <div style={{borderRight: "1px solid #222"}}>
              <div style={{padding: "22px clamp(16px,2.36vw,34px)", borderBottom: "1px solid #222", font: "500 15px 'Inter',sans-serif", letterSpacing: "0.5px", color: "#8a8a8a", display: "flex", alignItems: "center", gap: "10px"}}>
                {"WHAT WE HEAR"}
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))"}}>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#6e6e6e"}}>
                  <span>
                    {"01"}
                  </span>
                  <span style={{width: "26px", height: "26px", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>
                    {"×"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#9a9a9a"}}>
                    {"A bill nobody can read."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#6e6e6e"}}>
                    {"Hardware, licenses, AI tools and admin fees all run together."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#6e6e6e"}}>
                  <span>
                    {"02"}
                  </span>
                  <span style={{width: "26px", height: "26px", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>
                    {"×"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#9a9a9a"}}>
                    {"Slow, generic answers."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#6e6e6e"}}>
                    {"The person replying has never heard of your company."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#6e6e6e"}}>
                  <span>
                    {"03"}
                  </span>
                  <span style={{width: "26px", height: "26px", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>
                    {"×"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#9a9a9a"}}>
                    {"AI with no owner."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#6e6e6e"}}>
                    {"Staff use whatever AI tools they like. Nobody knows what data goes where."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#6e6e6e"}}>
                  <span>
                    {"04"}
                  </span>
                  <span style={{width: "26px", height: "26px", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>
                    {"×"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#9a9a9a"}}>
                    {"Big changes land on your team."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#6e6e6e"}}>
                    {"A migration or rollout ends up run by the customer."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#6e6e6e"}}>
                  <span>
                    {"05"}
                  </span>
                  <span style={{width: "26px", height: "26px", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>
                    {"×"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#9a9a9a"}}>
                    {"Nobody owns the plan."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#6e6e6e"}}>
                    {"Tickets get handled. Direction does not."}
                  </p>
                </div>
              </div>
            </div>
            <div style={{borderRight: "1px solid #222"}}>
              <div style={{padding: "22px clamp(16px,2.36vw,34px)", borderBottom: "1px solid #222", font: "500 15px 'Inter',sans-serif", letterSpacing: "0.5px", color: "#9db6ff", display: "flex", alignItems: "center", gap: "10px"}}>
                <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
                {"WHAT WE DO INSTEAD"}
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))"}}>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#05060b"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#9db6ff"}}>
                  <span>
                    {"01"}
                  </span>
                  <span style={{width: "26px", height: "26px", background: "#1e4dff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                    {"✓"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#fff"}}>
                    {"We know your name and your business."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#bdbdbd"}}>
                    {"Senior engineers, no strangers."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#05060b"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#9db6ff"}}>
                  <span>
                    {"02"}
                  </span>
                  <span style={{width: "26px", height: "26px", background: "#1e4dff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                    {"✓"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#fff"}}>
                    {"We answer the phone."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#bdbdbd"}}>
                    {"No handoffs, no escalations."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#05060b"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#9db6ff"}}>
                  <span>
                    {"03"}
                  </span>
                  <span style={{width: "26px", height: "26px", background: "#1e4dff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                    {"✓"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#fff"}}>
                    {"One team across the stack."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#bdbdbd"}}>
                    {"Support, network, security, data, AI and projects."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#05060b"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#9db6ff"}}>
                  <span>
                    {"04"}
                  </span>
                  <span style={{width: "26px", height: "26px", background: "#1e4dff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                    {"✓"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#fff"}}>
                    {"We meet on a schedule."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#bdbdbd"}}>
                    {"Monthly check ins, with a plan on the table."}
                  </p>
                </div>
              </div>
              <div style={{minHeight: "clamp(211px,23.61vw,340px)", padding: "clamp(16px,2.50vw,36px) clamp(16px,2.36vw,34px)", borderRight: "1px solid #222", borderBottom: "1px solid #222", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", background: "#05060b"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", font: "500 15px 'Inter',sans-serif", color: "#9db6ff"}}>
                  <span>
                    {"05"}
                  </span>
                  <span style={{width: "26px", height: "26px", background: "#1e4dff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                    {"✓"}
                  </span>
                </div>
                <div>
                  <div style={{font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#fff"}}>
                    {"A bill you can read."}
                  </div>
                  <p style={{margin: "12px 0 0", font: "400 16px/1.5 'Inter',sans-serif", color: "#bdbdbd"}}>
                    {"What is included, what is not, who pays for what."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"What we do"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "40px clamp(24px,4.17vw,60px)", alignItems: "end"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                {"WHAT WE DO"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "820px", textWrap: "balance"}}>
                {"Five ways we put AI to work."}
              </h2>
            </div>
            <div style={{maxWidth: "560px"}}>
              <p style={{margin: "0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"Start with one. Most clients end up using all five, because each one makes the next one easier."}
              </p>
              <div style={{marginTop: "32px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#ai"}>
                  {"⇢ SEE ALL AI SERVICES"}
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(36px,5.56vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", borderTop: "1px solid #e6e6e6", borderLeft: "1px solid #e6e6e6"}}>
            <a style={{padding: "clamp(16px,2.22vw,32px) 28px clamp(16px,2.36vw,34px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(248px,27.78vw,400px)", color: "#0a0a0a"}} href={"#ai"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <img style={{width: "84px", height: "84px"}} src={"/images/ca4d6868-898f-4b05-af81-794b863d2688.png"} alt={""} />
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"01"}
                </span>
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                  {"DATA"}
                </div>
                <div style={{marginTop: "12px", font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.6px", textWrap: "balance"}}>
                  {"Get your data ready for AI."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.22vw,32px) 28px clamp(16px,2.36vw,34px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(248px,27.78vw,400px)", color: "#0a0a0a"}} href={"#ai"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <img style={{width: "84px", height: "84px"}} src={"/images/cbc4fad3-3937-4089-868f-c334ca82e670.png"} alt={""} />
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"02"}
                </span>
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                  {"CUSTOM AI"}
                </div>
                <div style={{marginTop: "12px", font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.6px", textWrap: "balance"}}>
                  {"AI built around how you work."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.22vw,32px) 28px clamp(16px,2.36vw,34px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(248px,27.78vw,400px)", color: "#0a0a0a"}} href={"#ai"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <img style={{width: "84px", height: "84px"}} src={"/images/91ec2feb-4ae1-4316-ae04-8bf886406dd6.png"} alt={""} />
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"03"}
                </span>
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                  {"ENTERPRISE AI"}
                </div>
                <div style={{marginTop: "12px", font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.6px", textWrap: "balance"}}>
                  {"One AI layer for the whole company."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.22vw,32px) 28px clamp(16px,2.36vw,34px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(248px,27.78vw,400px)", color: "#0a0a0a"}} href={"#ai"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <img style={{width: "84px", height: "84px"}} src={"/images/894c0475-ffdf-4090-ab89-800b3fc3a47a.png"} alt={""} />
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"04"}
                </span>
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                  {"COPILOT"}
                </div>
                <div style={{marginTop: "12px", font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.6px", textWrap: "balance"}}>
                  {"Roll out Microsoft Copilot without the surprises."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.22vw,32px) 28px clamp(16px,2.36vw,34px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(248px,27.78vw,400px)", color: "#0a0a0a"}} href={"#ai"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <img style={{width: "84px", height: "84px"}} src={"/images/edee83d0-e2a2-4f3d-bf50-d2c3b55f5d5d.png"} alt={""} />
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"05"}
                </span>
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                  {"COMPLIANCE READY AI"}
                </div>
                <div style={{marginTop: "12px", font: "500 24px/1.2 'Inter',sans-serif", letterSpacing: "-0.6px", textWrap: "balance"}}>
                  {"AI that passes the audit."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section style={{background: "#000", color: "#fff"}} data-screen-label={"Foundation"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "40px clamp(24px,4.17vw,60px)", alignItems: "end"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
                {"THE FOUNDATION UNDER THE AI"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "820px", textWrap: "balance"}}>
                {"AI is only as strong as the IT it sits on."}
              </h2>
            </div>
            <div style={{maxWidth: "560px"}}>
              <p style={{margin: "0", font: "400 19px/1.55 'Inter',sans-serif", color: "#cfcfcf"}}>
                {"We run the whole stack, so you are not stitching together three vendors."}
              </p>
              <div style={{marginTop: "32px"}}>
                <a style={{border: "1px solid #2a2a2a", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#it"}>
                  {"⇢ SEE IT AND SECURITY"}
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(36px,5.56vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderTop: "1px solid #1e1e1e", borderLeft: "1px solid #1e1e1e"}}>
            <a style={{padding: "clamp(16px,2.36vw,34px) clamp(16px,2.22vw,32px) clamp(16px,2.50vw,36px)", borderRight: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(223px,25.00vw,360px)", color: "#fff"}} href={"#it"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={{font: "500 14px 'Inter'", color: "#9db6ff"}}>
                  {"01"}
                </span>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/d7086184-9be5-4dbb-88db-1a29712e36f5.png"} alt={""} />
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#9db6ff"}}>
                  {"MANAGED IT"}
                </div>
                <div style={{marginTop: "12px", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance"}}>
                  {"The IT department you do not have to build."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.36vw,34px) clamp(16px,2.22vw,32px) clamp(16px,2.50vw,36px)", borderRight: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(223px,25.00vw,360px)", color: "#fff"}} href={"#it"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={{font: "500 14px 'Inter'", color: "#9db6ff"}}>
                  {"02"}
                </span>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/bc3b1aaf-d592-434b-9708-41389003bce8.png"} alt={""} />
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#9db6ff"}}>
                  {"SECURITY"}
                </div>
                <div style={{marginTop: "12px", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance"}}>
                  {"Watched every day, explained in plain words."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.36vw,34px) clamp(16px,2.22vw,32px) clamp(16px,2.50vw,36px)", borderRight: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(223px,25.00vw,360px)", color: "#fff"}} href={"#it"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={{font: "500 14px 'Inter'", color: "#9db6ff"}}>
                  {"03"}
                </span>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/a3ee65c5-3a33-4ba1-831f-3633069f3d1c.png"} alt={""} />
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#9db6ff"}}>
                  {"LEADERSHIP: CXO AND CXAI"}
                </div>
                <div style={{marginTop: "12px", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance"}}>
                  {"The leaders you do not have to hire."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
            <a style={{padding: "clamp(16px,2.36vw,34px) clamp(16px,2.22vw,32px) clamp(16px,2.50vw,36px)", borderRight: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", display: "flex", flexDirection: "column", gap: "40px", minHeight: "clamp(223px,25.00vw,360px)", color: "#fff"}} href={"#it"}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={{font: "500 14px 'Inter'", color: "#9db6ff"}}>
                  {"04"}
                </span>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/d7086184-9be5-4dbb-88db-1a29712e36f5.png"} alt={""} />
              </div>
              <div style={{marginTop: "auto"}}>
                <div style={{font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#9db6ff"}}>
                  {"TECHNICAL SERVICES"}
                </div>
                <div style={{marginTop: "12px", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance"}}>
                  {"Specialists for the one time job."}
                </div>
                <div style={{marginTop: "24px", font: "600 15px 'Inter'"}}>
                  {"Learn more →"}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"Who we work with"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
            <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
            {"WHO WE WORK WITH"}
          </div>
          <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "900px", textWrap: "balance"}}>
            {"Built for businesses where mistakes are expensive."}
          </h2>
          <div style={{marginTop: "clamp(38px,5.90vw,85px)", display: "grid", borderTop: "1px solid #e6e6e6", borderLeft: "1px solid #e6e6e6"}} className={"site-www-cols"}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))"}} className={"site-www-group"}>
              <div style={{padding: "clamp(20px,2.2vw,32px) clamp(14px,1.95vw,28px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "clamp(24px,3.3vw,48px)"}}>
                <img style={{width: "clamp(56px,6.7vw,96px)", height: "clamp(56px,6.7vw,96px)"}} src={"/images/ca4d6868-898f-4b05-af81-794b863d2688.png"} alt={""} />
                <div style={{font: "500 clamp(16px,1.53vw,22px)/1.25 'Inter',sans-serif", overflowWrap: "break-word", hyphens: "auto", letterSpacing: "-0.4px", textWrap: "balance"}}>
                  {"Private equity portfolio companies"}
                </div>
              </div>
              <div style={{padding: "clamp(20px,2.2vw,32px) clamp(14px,1.95vw,28px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "clamp(24px,3.3vw,48px)"}}>
                <img style={{width: "clamp(56px,6.7vw,96px)", height: "clamp(56px,6.7vw,96px)"}} src={"/images/91ec2feb-4ae1-4316-ae04-8bf886406dd6.png"} alt={""} />
                <div style={{font: "500 clamp(16px,1.53vw,22px)/1.25 'Inter',sans-serif", overflowWrap: "break-word", hyphens: "auto", letterSpacing: "-0.4px", textWrap: "balance"}}>
                  {"Alternative investment firms"}
                </div>
              </div>
              <div style={{padding: "clamp(20px,2.2vw,32px) clamp(14px,1.95vw,28px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "clamp(24px,3.3vw,48px)"}}>
                <img style={{width: "clamp(56px,6.7vw,96px)", height: "clamp(56px,6.7vw,96px)"}} src={"/images/cbc4fad3-3937-4089-868f-c334ca82e670.png"} alt={""} />
                <div style={{font: "500 clamp(16px,1.53vw,22px)/1.25 'Inter',sans-serif", overflowWrap: "break-word", hyphens: "auto", letterSpacing: "-0.4px", textWrap: "balance"}}>
                  {"Financial services"}
                </div>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))"}} className={"site-www-group"}>
              <div style={{padding: "clamp(20px,2.2vw,32px) clamp(14px,1.95vw,28px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "clamp(24px,3.3vw,48px)"}}>
                <img style={{width: "clamp(56px,6.7vw,96px)", height: "clamp(56px,6.7vw,96px)"}} src={"/images/edee83d0-e2a2-4f3d-bf50-d2c3b55f5d5d.png"} alt={""} />
                <div style={{font: "500 clamp(16px,1.53vw,22px)/1.25 'Inter',sans-serif", overflowWrap: "break-word", hyphens: "auto", letterSpacing: "-0.4px", textWrap: "balance"}}>
                  {"Healthcare"}
                </div>
              </div>
              <div style={{padding: "clamp(20px,2.2vw,32px) clamp(14px,1.95vw,28px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "clamp(24px,3.3vw,48px)"}}>
                <img style={{width: "clamp(56px,6.7vw,96px)", height: "clamp(56px,6.7vw,96px)"}} src={"/images/894c0475-ffdf-4090-ab89-800b3fc3a47a.png"} alt={""} />
                <div style={{font: "500 clamp(16px,1.53vw,22px)/1.25 'Inter',sans-serif", overflowWrap: "break-word", hyphens: "auto", letterSpacing: "-0.4px", textWrap: "balance"}}>
                  {"Professional services"}
                </div>
              </div>
              <div style={{padding: "clamp(20px,2.2vw,32px) clamp(14px,1.95vw,28px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", gap: "clamp(24px,3.3vw,48px)"}}>
                <img style={{width: "clamp(56px,6.7vw,96px)", height: "clamp(56px,6.7vw,96px)"}} src={"/images/93ee12eb-2712-4074-b7ea-7ad10c7ca857.png"} alt={""} />
                <div style={{font: "500 clamp(16px,1.53vw,22px)/1.25 'Inter',sans-serif", overflowWrap: "break-word", hyphens: "auto", letterSpacing: "-0.4px", textWrap: "balance"}}>
                  {"Field services"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    ) : null}
    {r.ai ? (
      <>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"What we do"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(63px,9.72vw,140px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
              <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
              {"WHAT WE DO"}
            </div>
            <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "900px", textWrap: "balance"}}>
              {"Five ways we put AI to work."}
            </h2>
            <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif", maxWidth: "620px"}}>
              {"Start with one. Most clients end up using all five, because each one makes the next one easier."}
            </p>
          </div>
          <div style={{marginTop: "clamp(68px,10.42vw,150px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(24px,4.17vw,60px)", alignItems: "center"}}>
            <div style={{maxWidth: "520px", justifySelf: "center"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                <span style={{whiteSpace: "nowrap"}}>
                  {"01 — DATA"}
                </span>
              </div>
              <h3 style={{margin: "24px 0 0", font: "500 clamp(30px,3.06vw,44px)/1.1 'Inter',sans-serif", letterSpacing: "-0.027em", textWrap: "balance"}}>
                {"Get your data ready for AI."}
              </h3>
              <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"We connect, clean and organize the data spread across your ERP, CRM, file shares and line of business systems. You get one trusted source that people and AI can both use."}
              </p>
              <div style={{marginTop: "44px", display: "flex", flexDirection: "column", gap: "24px"}}>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Data audits and readiness assessments"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Pipelines, warehouses and integrations"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Classification and labeling of sensitive data"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Reporting and dashboards your leaders will open"}
                  </span>
                </div>
              </div>
              <div style={{marginTop: "48px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
                  {"⇢ ASSESS YOUR DATA"}
                </a>
              </div>
            </div>
            <div style={{position: "relative", minHeight: "clamp(471px,52.78vw,760px)", background: "url(\"/images/8bb0d131-d923-40d2-86db-5b2ead203444.png\") center/cover", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(27px,4.17vw,60px) 12px"}}>
              <div style={{width: "560px", maxWidth: "100%", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px"}}>
                <div style={{background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter',sans-serif"}}>
                  <div style={{padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                    <span style={{font: "500 16px 'Inter'"}}>
                      {"DATA SOURCES"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", font: "400 14px 'Inter'", color: "#666"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"3 of 4 ready"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"ERP"}
                      </span>
                      {"ERP"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Connected"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"CRM"}
                      </span>
                      {"CRM"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Connected"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"FS"}
                      </span>
                      {"File shares"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"Classifying"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"LOB"}
                      </span>
                      {"Line of business systems"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Connected"}
                    </span>
                  </div>
                  <div style={{padding: "22px 28px", display: "flex", alignItems: "center", gap: "14px", font: "500 15px 'Inter'", borderBottom: "1px solid #eee", background: "#fafbff"}}>
                    <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px"}}>
                      {"✦"}
                    </span>
                    {"One trusted source for people and AI"}
                  </div>
                  <div style={{padding: "20px 28px 26px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", font: "500 15px 'Inter'"}}>
                      <span>
                        {"READINESS"}
                      </span>
                      <span>
                        {"3 / 4"}
                      </span>
                    </div>
                    <div style={{marginTop: "12px", height: "6px", background: "#eee", borderRadius: "3px"}}>
                      <div style={{width: "75%", height: "100%", background: "#000", borderRadius: "3px"}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(68px,10.42vw,150px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(24px,4.17vw,60px)", alignItems: "center"}}>
            <div style={{position: "relative", minHeight: "clamp(471px,52.78vw,760px)", background: "url(\"/images/5bba20d1-3b33-4091-ad28-d0ba2998cf44.png\") center/cover", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(27px,4.17vw,60px) 12px"}}>
              <div style={{width: "560px", maxWidth: "100%", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px"}}>
                <div style={{background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter',sans-serif"}}>
                  <div style={{padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                    <span style={{font: "500 16px 'Inter'"}}>
                      {"CUSTOM AGENT"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", font: "400 14px 'Inter'", color: "#666"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"Running"}
                    </span>
                  </div>
                  <div style={{padding: "28px 28px 0", display: "flex", flexDirection: "column", gap: "18px", font: "400 15px/1.6 'Inter'"}}>
                    <div style={{display: "flex", alignItems: "flex-end", gap: "12px"}}>
                      <span style={{width: "34px", height: "34px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", borderRadius: "3px"}}>
                        {"✦"}
                      </span>
                      <div style={{border: "1px solid #f0f0f0", padding: "12px 16px", maxWidth: "330px"}}>
                        {"Field call logged. Want me to book the follow up?"}
                      </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <div style={{background: "#000", color: "#fff", padding: "12px 14px", borderRadius: "4px", maxWidth: "300px", fontWeight: "500"}}>
                        {"Yes, Thursday morning."}
                      </div>
                    </div>
                    <div style={{display: "flex", alignItems: "flex-end", gap: "12px"}}>
                      <span style={{width: "34px", height: "34px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", borderRadius: "3px"}}>
                        {"✦"}
                      </span>
                      <div style={{border: "1px solid #cfe0ff", padding: "14px 16px", width: "330px", borderRadius: "4px"}}>
                        {"Follow up booked"}
                        <div style={{borderLeft: "1px solid #ddd", margin: "10px 0", paddingLeft: "14px", fontSize: "13px", color: "#777", lineHeight: "1.8"}}>
                          {"Call summary saved to CRM"}
                          <br />
                          {"Technician notified"}
                        </div>
                        {"Ready for review"}
                      </div>
                    </div>
                  </div>
                  <div style={{margin: "22px 28px 24px", border: "1px solid #eee", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px 0 20px", font: "400 15px 'Inter'", color: "#888"}}>
                    {"Message your agent..."}
                    <span style={{width: "38px", height: "38px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px"}}>
                      {"➢"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{maxWidth: "520px", justifySelf: "center"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                <span style={{whiteSpace: "nowrap"}}>
                  {"02 — CUSTOM AI"}
                </span>
              </div>
              <h3 style={{margin: "24px 0 0", font: "500 clamp(30px,3.06vw,44px)/1.1 'Inter',sans-serif", letterSpacing: "-0.027em", textWrap: "balance"}}>
                {"AI built around how you work."}
              </h3>
              <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"When an off the shelf tool does not fit, we build one that does. Agents, assistants and automations trained on your processes and wired into your systems."}
              </p>
              <div style={{marginTop: "44px", display: "flex", flexDirection: "column", gap: "24px"}}>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"AI agents that take action, not just answer questions"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Voice agents for customer and field calls"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Document review, intake and extraction"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Workflow automation across tools"}
                  </span>
                </div>
              </div>
              <div style={{marginTop: "48px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
                  {"⇢ BUILD WITH US"}
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(68px,10.42vw,150px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(24px,4.17vw,60px)", alignItems: "center"}}>
            <div style={{maxWidth: "520px", justifySelf: "center"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                <span style={{whiteSpace: "nowrap"}}>
                  {"03 — ENTERPRISE AI"}
                </span>
              </div>
              <h3 style={{margin: "24px 0 0", font: "500 clamp(30px,3.06vw,44px)/1.1 'Inter',sans-serif", letterSpacing: "-0.027em", textWrap: "balance"}}>
                {"One AI layer for the whole company."}
              </h3>
              <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"We put an operating layer underneath your teams so every model, agent and workflow runs in one place, with one view of what it costs and what it delivers."}
              </p>
              <div style={{marginTop: "44px", display: "flex", flexDirection: "column", gap: "24px"}}>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"AI strategy, policy and governance led by a fractional CxAI"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"A control center for every AI tool in use"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Model selection across leading providers"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Rollout plans by team, region and business unit"}
                  </span>
                </div>
              </div>
              <div style={{marginTop: "48px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
                  {"⇢ PLAN YOUR ROLLOUT"}
                </a>
              </div>
            </div>
            <div style={{position: "relative", minHeight: "clamp(471px,52.78vw,760px)", background: "url(\"/images/60ce4242-d9ad-43d6-ba0f-344a449c84a1.png\") center/cover", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(27px,4.17vw,60px) 12px"}}>
              <div style={{width: "560px", maxWidth: "100%", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px"}}>
                <div style={{background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter',sans-serif"}}>
                  <div style={{padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                    <span style={{font: "500 16px 'Inter'"}}>
                      {"AI CONTROL CENTER"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", font: "400 14px 'Inter'", color: "#666"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"All systems"}
                    </span>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", padding: "14px 28px", borderBottom: "1px solid #eee", font: "500 12px 'Inter'", color: "#888", letterSpacing: "0.5px"}}>
                    <span>
                      {"AGENT"}
                    </span>
                    <span>
                      {"TEAM"}
                    </span>
                    <span>
                      {"STATUS"}
                    </span>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", alignItems: "center", padding: "16px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"AI"}
                      </span>
                      {"Intake assistant"}
                    </span>
                    <span style={{color: "#555"}}>
                      {"Operations"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Live"}
                    </span>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", alignItems: "center", padding: "16px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"AI"}
                      </span>
                      {"Research agent"}
                    </span>
                    <span style={{color: "#555"}}>
                      {"Investments"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Live"}
                    </span>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", alignItems: "center", padding: "16px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"AI"}
                      </span>
                      {"Voice agent"}
                    </span>
                    <span style={{color: "#555"}}>
                      {"Customer calls"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Live"}
                    </span>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", alignItems: "center", padding: "16px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"AI"}
                      </span>
                      {"Microsoft Copilot"}
                    </span>
                    <span style={{color: "#555"}}>
                      {"All staff"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"Rollout"}
                    </span>
                  </div>
                  <div style={{display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", alignItems: "center", padding: "16px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"AI"}
                      </span>
                      {"Document review"}
                    </span>
                    <span style={{color: "#555"}}>
                      {"Legal"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"Testing"}
                    </span>
                  </div>
                  <div style={{padding: "20px 28px 24px", font: "400 14px 'Inter'", color: "#666"}}>
                    {"Every model, agent and workflow in one place"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(68px,10.42vw,150px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(24px,4.17vw,60px)", alignItems: "center"}}>
            <div style={{position: "relative", minHeight: "clamp(471px,52.78vw,760px)", background: "url(\"/images/8bb0d131-d923-40d2-86db-5b2ead203444.png\") center/cover", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(27px,4.17vw,60px) 12px"}}>
              <div style={{width: "560px", maxWidth: "100%", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px"}}>
                <div style={{background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter',sans-serif"}}>
                  <div style={{padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                    <span style={{font: "500 16px 'Inter'"}}>
                      {"COPILOT READINESS"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", font: "400 14px 'Inter'", color: "#666"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"Phase 2"}
                    </span>
                  </div>
                  <div style={{padding: "28px", display: "flex", flexDirection: "column", gap: "22px", font: "400 16px 'Inter'", position: "relative"}}>
                    <div style={{position: "absolute", left: "40px", top: "42px", height: "150px", width: "1px", background: "#3b6cf6"}} />
                    <div style={{display: "flex", alignItems: "center", gap: "16px", position: "relative"}}>
                      <span style={{width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}>
                        {"✓"}
                      </span>
                      {"Shadow AI discovery"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "16px", position: "relative"}}>
                      <span style={{width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}>
                        {"✓"}
                      </span>
                      {"Permissions cleanup"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "16px", position: "relative"}}>
                      <span style={{width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}>
                        {"✓"}
                      </span>
                      {"Oversharing fixed"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "16px", position: "relative"}}>
                      <span style={{width: "25px", height: "25px", borderRadius: "50%", background: "#000", color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}>
                        {"✓"}
                      </span>
                      {"Phase 1 deployment"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "16px", position: "relative", color: "#999"}}>
                      <span style={{width: "25px", height: "25px", borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}>
                        <span style={{width: "9px", height: "9px", borderRadius: "50%", background: "#ccc"}} />
                      </span>
                      {"Team training"}
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "16px", position: "relative", color: "#999"}}>
                      <span style={{width: "25px", height: "25px", borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}>
                        <span style={{width: "9px", height: "9px", borderRadius: "50%", background: "#ccc"}} />
                      </span>
                      {"Adoption tracking"}
                    </div>
                  </div>
                  <div style={{borderTop: "1px solid #eee"}}>
                    <div style={{padding: "20px 28px 26px"}}>
                      <div style={{display: "flex", justifyContent: "space-between", font: "500 15px 'Inter'"}}>
                        <span>
                          {"PROGRESS"}
                        </span>
                        <span>
                          {"4 / 6"}
                        </span>
                      </div>
                      <div style={{marginTop: "12px", height: "6px", background: "#eee", borderRadius: "3px"}}>
                        <div style={{width: "66%", height: "100%", background: "#000", borderRadius: "3px"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{maxWidth: "520px", justifySelf: "center"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                <span style={{whiteSpace: "nowrap"}}>
                  {"04 — COPILOT"}
                </span>
              </div>
              <h3 style={{margin: "24px 0 0", font: "500 clamp(30px,3.06vw,44px)/1.1 'Inter',sans-serif", letterSpacing: "-0.027em", textWrap: "balance"}}>
                {"Roll out Microsoft Copilot without the surprises."}
              </h3>
              <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"Copilot sees everything your people can see. We fix permissions and oversharing first, then deploy in phases, train your teams and track adoption."}
              </p>
              <div style={{marginTop: "44px", display: "flex", flexDirection: "column", gap: "24px"}}>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Copilot readiness review and shadow AI discovery"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Permissions cleanup and data governance"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Phased deployment and user training"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Custom agents in Copilot Studio"}
                  </span>
                </div>
              </div>
              <div style={{marginTop: "48px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
                  {"⇢ CHECK YOUR COPILOT READINESS"}
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(68px,10.42vw,150px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(24px,4.17vw,60px)", alignItems: "center"}}>
            <div style={{maxWidth: "520px", justifySelf: "center"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                <span style={{whiteSpace: "nowrap"}}>
                  {"05 — COMPLIANCE READY AI"}
                </span>
              </div>
              <h3 style={{margin: "24px 0 0", font: "500 clamp(30px,3.06vw,44px)/1.1 'Inter',sans-serif", letterSpacing: "-0.027em", textWrap: "balance"}}>
                {"AI that passes the audit."}
              </h3>
              <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"We design AI for regulated work from the start. Access controls, logging, retention and data residency are built in, and mapped to the frameworks you report against."}
              </p>
              <div style={{marginTop: "44px", display: "flex", flexDirection: "column", gap: "24px"}}>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Mapping to HIPAA, SOC 2, ISO 27001, GDPR and industry rules"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Audit logs for every prompt, response and action"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Private deployments where data never leaves your environment"}
                  </span>
                </div>
                <div style={{display: "flex", gap: "20px", font: "400 18px/1.45 'Inter',sans-serif"}}>
                  <span style={{flexShrink: "0"}}>
                    {"→"}
                  </span>
                  <span>
                    {"Evidence ready for diligence, audits, insurers and exit"}
                  </span>
                </div>
              </div>
              <div style={{marginTop: "48px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
                  {"⇢ TALK TO A COMPLIANCE LEAD"}
                </a>
              </div>
            </div>
            <div style={{position: "relative", minHeight: "clamp(471px,52.78vw,760px)", background: "url(\"/images/5bba20d1-3b33-4091-ad28-d0ba2998cf44.png\") center/cover", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(27px,4.17vw,60px) 12px"}}>
              <div style={{width: "560px", maxWidth: "100%", background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.55)", borderRadius: "14px", padding: "13px"}}>
                <div style={{background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter',sans-serif"}}>
                  <div style={{padding: "22px 28px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                    <span style={{font: "500 16px 'Inter'"}}>
                      {"AUDIT LOG"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", font: "400 14px 'Inter'", color: "#666"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#3b6cf6", flexShrink: "0"}} />
                      {"Recording"}
                    </span>
                  </div>
                  <div style={{padding: "18px 28px", borderBottom: "1px solid #eee", display: "flex", flexWrap: "wrap", gap: "8px"}}>
                    <span style={{border: "1px solid #cfe0ff", background: "#f4f7ff", padding: "6px 10px", font: "500 12px 'Inter'", borderRadius: "3px"}}>
                      {"HIPAA"}
                    </span>
                    <span style={{border: "1px solid #cfe0ff", background: "#f4f7ff", padding: "6px 10px", font: "500 12px 'Inter'", borderRadius: "3px"}}>
                      {"SOC 2"}
                    </span>
                    <span style={{border: "1px solid #cfe0ff", background: "#f4f7ff", padding: "6px 10px", font: "500 12px 'Inter'", borderRadius: "3px"}}>
                      {"ISO 27001"}
                    </span>
                    <span style={{border: "1px solid #cfe0ff", background: "#f4f7ff", padding: "6px 10px", font: "500 12px 'Inter'", borderRadius: "3px"}}>
                      {"GDPR"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"P"}
                      </span>
                      {"Prompt · Finance team"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Logged"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"R"}
                      </span>
                      {"Response · Research agent"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Logged"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"A"}
                      </span>
                      {"Agent action · Saved in tenant"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Logged"}
                    </span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "17px 28px", borderBottom: "1px solid #f2f2f2", font: "400 15px 'Inter'"}}>
                    <span style={{display: "flex", alignItems: "center", gap: "14px"}}>
                      <span style={{width: "32px", height: "32px", borderRadius: "4px", background: "#f2f4fb", color: "#1e4dff", display: "flex", alignItems: "center", justifyContent: "center", font: "600 11px 'Inter'", flexShrink: "0"}}>
                        {"S"}
                      </span>
                      {"Access check · SSO policy"}
                    </span>
                    <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555"}}>
                      <span style={{width: "8px", height: "8px", borderRadius: "50%", background: "#1ed760", flexShrink: "0"}} />
                      {"Passed"}
                    </span>
                  </div>
                  <div style={{padding: "20px 28px 24px", display: "flex", justifyContent: "space-between", font: "500 15px 'Inter'"}}>
                    <span>
                      {"EVIDENCE"}
                    </span>
                    <span style={{color: "#1e4dff"}}>
                      {"Ready for audit"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{background: "#000", color: "#fff"}} id={"platform"} data-screen-label={"Our AI platform"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(63px,9.72vw,140px)"}}>
          <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
            <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
            {"THE LAYER UNDERNEATH"}
          </div>
          <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "900px", textWrap: "balance"}}>
            {"We don’t hand you a roadmap and leave."}
          </h2>
          <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif", color: "#cfcfcf", maxWidth: "760px"}}>
            {"iTILITi builds AI operating systems for the businesses we support and embeds the team to run them. That means you get more than advice. You get a platform, the people who deploy it, and a partner who stays accountable for the numbers."}
          </p>
          <div style={{marginTop: "clamp(41px,6.25vw,90px)", border: "1px solid #1e1e1e"}}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderBottom: "1px solid #1e1e1e"}}>
              <div style={{padding: "clamp(18px,2.78vw,40px)", borderRight: "1px solid #1e1e1e", display: "flex", flexDirection: "column"}}>
                <div style={{height: "330px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <img style={{width: "440px", maxWidth: "100%"}} src={"/images/b15a7f85-157e-4dd4-b469-511f052c957b.png"} alt={""} />
                </div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"AI operating system"}
                </div>
                <p style={{margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#bdbdbd"}}>
                  {"One layer that connects your systems, data and AI tools so work runs in one place."}
                </p>
              </div>
              <div style={{padding: "clamp(18px,2.78vw,40px)", borderRight: "1px solid #1e1e1e", display: "flex", flexDirection: "column"}}>
                <div style={{height: "330px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <div style={{width: "310px", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "14px"}}>
                    <div style={{border: "1px solid #1f2a5a", borderRadius: "4px", padding: "13px 14px", font: "400 14px 'Inter'", background: "#05060b"}}>
                      {"Every agent, model and workflow|"}
                    </div>
                    <div style={{border: "1px solid #1a1a1a", borderRadius: "4px", padding: "6px 14px", background: "#05060b", font: "400 13px 'Inter'", color: "#aaa"}}>
                      <div style={{display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 0"}}>
                        <span style={{color: "#fff"}}>
                          {"What it does"}
                        </span>
                        <span>
                          {"Intake, research, calls"}
                        </span>
                      </div>
                      <div style={{display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 0", borderTop: "1px solid #151515"}}>
                        <span style={{color: "#fff"}}>
                          {"What it costs"}
                        </span>
                        <span>
                          {"Per team, per month"}
                        </span>
                      </div>
                      <div style={{display: "flex", justifyContent: "space-between", gap: "10px", padding: "12px 0", borderTop: "1px solid #151515"}}>
                        <span style={{color: "#fff"}}>
                          {"What it returns"}
                        </span>
                        <span>
                          {"Hours and outcomes"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"AI control center"}
                </div>
                <p style={{margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#bdbdbd"}}>
                  {"A single view of every agent, model and workflow in the business: what it does, what it costs, what it returns."}
                </p>
              </div>
              <div style={{padding: "clamp(18px,2.78vw,40px)", display: "flex", flexDirection: "column"}}>
                <div style={{height: "330px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <div style={{width: "250px", maxWidth: "100%", border: "1px solid #2a3a7a", background: "#06070c", borderRadius: "4px", padding: "10px 14px"}}>
                    <div style={{font: "500 10px 'Inter'", letterSpacing: "0.5px", color: "#999"}}>
                      {"INBOUND"}
                    </div>
                    <div style={{font: "400 15px 'Inter'", marginTop: "4px"}}>
                      {"Customer call"}
                    </div>
                  </div>
                  <div style={{width: "1px", height: "30px", background: "#2a3a7a"}} />
                  <div style={{width: "250px", maxWidth: "100%", border: "1px solid #3b55c8", background: "#08112e", borderRadius: "4px", padding: "10px 14px"}}>
                    <div style={{font: "500 10px 'Inter'", letterSpacing: "0.5px", color: "#999"}}>
                      {"VOICE AGENT"}
                    </div>
                    <div style={{font: "400 15px 'Inter'", marginTop: "4px"}}>
                      {"Natural conversation"}
                    </div>
                  </div>
                  <div style={{width: "1px", height: "30px", background: "#2a3a7a"}} />
                  <div style={{width: "250px", maxWidth: "100%", border: "1px solid #2a3a7a", background: "#06070c", borderRadius: "4px", padding: "10px 14px"}}>
                    <div style={{font: "500 10px 'Inter'", letterSpacing: "0.5px", color: "#999"}}>
                      {"ACTION"}
                    </div>
                    <div style={{font: "400 15px 'Inter'", marginTop: "4px"}}>
                      {"Work done inside your tools"}
                    </div>
                  </div>
                </div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Agents and voice"}
                </div>
                <p style={{margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#bdbdbd"}}>
                  {"AI agents that work inside your tools, plus natural voice agents for every customer call."}
                </p>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", borderBottom: "1px solid #1e1e1e"}}>
              <div style={{padding: "clamp(18px,2.78vw,40px)", borderRight: "1px solid #1e1e1e", display: "flex", flexDirection: "column"}}>
                <div style={{height: "360px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center", font: "400 15px 'Inter'"}}>
                    <div style={{border: "1px solid #1e1e1e", padding: "13px 18px", borderRadius: "4px"}}>
                      {"Your business"}
                    </div>
                    <div style={{width: "1px", height: "44px", background: "#2a3a7a"}} />
                    <div style={{border: "1px solid #3b55c8", background: "#08112e", padding: "13px clamp(18px,2.78vw,40px)", borderRadius: "4px"}}>
                      {"iTILITi deployment team"}
                    </div>
                    <div style={{width: "1px", height: "44px", background: "#2a3a7a"}} />
                    <div style={{display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center"}}>
                      <div style={{border: "1px solid #1e1e1e", padding: "11px 16px", borderRadius: "4px", color: "#ccc"}}>
                        {"Deployment lead"}
                      </div>
                      <div style={{border: "1px solid #1e1e1e", padding: "11px 16px", borderRadius: "4px", color: "#ccc"}}>
                        {"Forward deployed engineer"}
                      </div>
                      <div style={{border: "1px solid #1e1e1e", padding: "11px 16px", borderRadius: "4px", color: "#ccc"}}>
                        {"Analyst"}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Embedded deployment teams"}
                </div>
                <p style={{margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#bdbdbd"}}>
                  {"Two to four people inside your business: a deployment lead, a forward deployed engineer and an analyst who runs it day to day."}
                </p>
              </div>
              <div style={{padding: "clamp(18px,2.78vw,40px)", display: "flex", flexDirection: "column"}}>
                <div style={{height: "360px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "14px", width: "100%", maxWidth: "520px"}}>
                    <div style={{border: "1px solid #1e1e1e", padding: "clamp(18px,2.1vw,30px) clamp(14px,1.7vw,24px)", font: "500 clamp(17px,1.67vw,24px) 'Inter'", letterSpacing: "-0.02em", overflowWrap: "break-word"}}>
                      {"Google Cloud"}
                    </div>
                    <div style={{border: "1px solid #1e1e1e", padding: "clamp(18px,2.1vw,30px) clamp(14px,1.7vw,24px)", font: "500 clamp(17px,1.67vw,24px) 'Inter'", letterSpacing: "-0.02em", overflowWrap: "break-word"}}>
                      {"Microsoft"}
                    </div>
                    <div style={{gridColumn: "1/3", border: "1px solid #3b55c8", background: "#08112e", padding: "clamp(14px,1.4vw,20px) clamp(14px,1.7vw,24px)", font: "400 16px 'Inter'", display: "flex", alignItems: "center", gap: "10px"}}>
                      <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
                      {"The leading AI models your team already uses"}
                    </div>
                  </div>
                </div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Built on what you already run"}
                </div>
                <p style={{margin: "18px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#bdbdbd"}}>
                  {"Built on Google Cloud and Microsoft, and works with the leading AI models your team already uses."}
                </p>
              </div>
            </div>
            <div style={{padding: "clamp(23px,3.47vw,50px) 0", overflow: "hidden", backgroundImage: "radial-gradient(#1c1c1c 1px,transparent 1px)", backgroundSize: "12px 12px", display: "flex", flexDirection: "column", gap: "16px", font: "400 18px 'Inter',sans-serif"}}>
              <div style={{display: "flex", gap: "20px", whiteSpace: "nowrap", marginLeft: "-60px"}}>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Help desk"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Data pipelines"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Voice agents"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Copilot Studio"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Audit logs"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Endpoint protection"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Shadow AI discovery"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"License reclaim"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Backup and recovery"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Document extraction"}
                </span>
              </div>
              <div style={{display: "flex", gap: "20px", whiteSpace: "nowrap"}}>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"AI governance"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Identity threat detection"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Migrations"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Dashboards"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Workflow automation"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Vendor management"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Phishing response"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Private deployments"}
                </span>
                <span style={{padding: "12px 18px", border: "1px solid #1e1e1e", background: "#000"}}>
                  {"Onboarding"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    ) : null}
    {r.it ? (
      <>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"Foundation"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(63px,9.72vw,140px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "40px clamp(24px,4.17vw,60px)", alignItems: "end"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                {"THE FOUNDATION UNDER THE AI"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "820px", textWrap: "balance"}}>
                {"AI is only as strong as the IT it sits on."}
              </h2>
            </div>
            <div style={{maxWidth: "560px"}}>
              <p style={{margin: "0", font: "400 19px/1.55 'Inter',sans-serif"}}>
                {"We run the whole stack, so you are not stitching together three vendors."}
              </p>
              <div style={{marginTop: "32px"}}>
                <a style={{background: "#000", color: "#fff", padding: "12px 30px 12px 18px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#contact"}>
                  {"⇢ BOOK A CALL"}
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop: "clamp(36px,5.56vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderTop: "1px solid #e6e6e6", borderLeft: "1px solid #e6e6e6"}}>
            <div style={{padding: "clamp(16px,2.50vw,36px) clamp(16px,2.22vw,32px) clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"01"}
                </span>
                <img style={{width: "40px"}} src={"/images/d7086184-9be5-4dbb-88db-1a29712e36f5.png"} alt={""} />
              </div>
              <div style={{marginTop: "clamp(32px,5.00vw,72px)", font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                {"MANAGED IT"}
              </div>
              <h3 style={{margin: "14px 0 0", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance", minHeight: "2.4em"}}>
                {"The IT department you do not have to build."}
              </h3>
              <div style={{marginTop: "28px"}}>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Help desk support for every employee"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Onboarding and offboarding"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Device management and patching"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Microsoft 365 and cloud administration"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Network and wireless management"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Backup, recovery and documentation"}
                </div>
              </div>
            </div>
            <div style={{padding: "clamp(16px,2.50vw,36px) clamp(16px,2.22vw,32px) clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"02"}
                </span>
                <img style={{width: "40px"}} src={"/images/bc3b1aaf-d592-434b-9708-41389003bce8.png"} alt={""} />
              </div>
              <div style={{marginTop: "clamp(32px,5.00vw,72px)", font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                {"SECURITY"}
              </div>
              <h3 style={{margin: "14px 0 0", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance", minHeight: "2.4em"}}>
                {"Watched every day, explained in plain words."}
              </h3>
              <div style={{marginTop: "28px"}}>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Endpoint protection and response"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Identity threat detection"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Email filtering and phishing response"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Vulnerability and patch management"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Security policies and awareness training"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Incident response support"}
                </div>
              </div>
            </div>
            <div style={{padding: "clamp(16px,2.50vw,36px) clamp(16px,2.22vw,32px) clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"03"}
                </span>
                <img style={{width: "40px"}} src={"/images/a3ee65c5-3a33-4ba1-831f-3633069f3d1c.png"} alt={""} />
              </div>
              <div style={{marginTop: "clamp(32px,5.00vw,72px)", font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                {"LEADERSHIP: CXO AND CXAI"}
              </div>
              <h3 style={{margin: "14px 0 0", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance", minHeight: "2.4em"}}>
                {"The leaders you do not have to hire."}
              </h3>
              <div style={{marginTop: "28px"}}>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Technology strategy and roadmap"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Budget, license and vendor management"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Security and compliance leadership"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Diligence, audit, insurer and exit readiness"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"AI strategy, policy and governance"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Secure AI setup, training and visibility"}
                </div>
              </div>
            </div>
            <div style={{padding: "clamp(16px,2.50vw,36px) clamp(16px,2.22vw,32px) clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
                <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                  {"04"}
                </span>
                <img style={{width: "40px"}} src={"/images/d7086184-9be5-4dbb-88db-1a29712e36f5.png"} alt={""} />
              </div>
              <div style={{marginTop: "clamp(32px,5.00vw,72px)", font: "500 14px 'Inter'", letterSpacing: "0.5px", color: "#1e4dff"}}>
                {"TECHNICAL SERVICES"}
              </div>
              <h3 style={{margin: "14px 0 0", font: "500 28px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px", textWrap: "balance", minHeight: "2.4em"}}>
                {"Specialists for the one time job."}
              </h3>
              <div style={{marginTop: "28px"}}>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Migrations and platform changes"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"New site builds and office moves"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Network and infrastructure upgrades"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Assessments and audits"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"Acquisition and add on integrations"}
                </div>
                <div style={{padding: "12px 0", borderTop: "1px solid #f0f0f0", font: "400 16px/1.45 'Inter',sans-serif", display: "flex", gap: "14px"}}>
                  <span style={{color: "#aaa"}}>
                    {"→"}
                  </span>
                  {"System integrations and automation"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{background: "#000", color: "#fff"}} data-screen-label={"Security and compliance"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "40px clamp(24px,4.17vw,60px)"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
                {"SECURITY AND COMPLIANCE"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "640px", textWrap: "balance"}}>
                {"Built for industries that get audited."}
              </h2>
              <p style={{margin: "28px 0 0", font: "400 19px/1.55 'Inter',sans-serif", color: "#cfcfcf", maxWidth: "560px"}}>
                {"Alternative investment firms, portfolio companies, healthcare, legal and field services all run on rules. Our AI follows them. Every deployment starts with your compliance requirements, not ends with them."}
              </p>
              <div style={{marginTop: "50px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap"}}>
                <span style={{height: "64px", minWidth: "64px", padding: "0 18px", borderRadius: "32px", border: "1px solid #3b55c8", background: "#08112e", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", font: "500 14px 'Inter'"}}>
                  {"SOC 2"}
                </span>
                <span style={{height: "64px", minWidth: "64px", padding: "0 18px", borderRadius: "32px", border: "1px solid #3b55c8", background: "#08112e", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", font: "500 14px 'Inter'"}}>
                  {"GDPR"}
                </span>
                <span style={{height: "64px", minWidth: "64px", padding: "0 18px", borderRadius: "32px", border: "1px solid #3b55c8", background: "#08112e", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", font: "500 14px 'Inter'"}}>
                  {"HIPAA"}
                </span>
                <span style={{height: "64px", minWidth: "64px", padding: "0 18px", borderRadius: "32px", border: "1px solid #3b55c8", background: "#08112e", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", font: "500 14px 'Inter'"}}>
                  {"SEC"}
                </span>
                <span style={{height: "64px", minWidth: "64px", padding: "0 18px", borderRadius: "32px", border: "1px solid #3b55c8", background: "#08112e", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", font: "500 14px 'Inter'"}}>
                  {"FINRA"}
                </span>
                <span style={{height: "64px", minWidth: "64px", padding: "0 18px", borderRadius: "32px", border: "1px solid #3b55c8", background: "#08112e", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", font: "500 14px 'Inter'"}}>
                  {"ISO 27001"}
                </span>
              </div>
              <div style={{marginTop: "44px"}}>
                <a style={{border: "1px solid #2a2a2a", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
                  {"⇢ REQUEST OUR SECURITY OVERVIEW"}
                </a>
              </div>
            </div>
            <div style={{borderTop: "1px solid #1e1e1e", alignSelf: "start"}}>
              <div style={{display: "grid", gridTemplateColumns: "52px minmax(0,1fr)", gap: "24px", padding: "30px 0", borderBottom: "1px solid #1e1e1e"}}>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/bc3b1aaf-d592-434b-9708-41389003bce8.png"} alt={""} />
                <div>
                  <div style={{font: "500 24px/1.25 'Inter',sans-serif", letterSpacing: "-0.5px"}}>
                    {"Your data stays yours."}
                  </div>
                  <p style={{margin: "10px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#a8a8a8"}}>
                    {"We never use client data to train models."}
                  </p>
                </div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "52px minmax(0,1fr)", gap: "24px", padding: "30px 0", borderBottom: "1px solid #1e1e1e"}}>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/d7086184-9be5-4dbb-88db-1a29712e36f5.png"} alt={""} />
                <div>
                  <div style={{font: "500 24px/1.25 'Inter',sans-serif", letterSpacing: "-0.5px"}}>
                    {"Your environment, your control."}
                  </div>
                  <p style={{margin: "10px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#a8a8a8"}}>
                    {"Private and in tenant deployments, single sign on and your existing access policies."}
                  </p>
                </div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "52px minmax(0,1fr)", gap: "24px", padding: "30px 0", borderBottom: "1px solid #1e1e1e"}}>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/bc3b1aaf-d592-434b-9708-41389003bce8.png"} alt={""} />
                <div>
                  <div style={{font: "500 24px/1.25 'Inter',sans-serif", letterSpacing: "-0.5px"}}>
                    {"Encrypted end to end."}
                  </div>
                  <p style={{margin: "10px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#a8a8a8"}}>
                    {"Data encrypted at rest and in transit."}
                  </p>
                </div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "52px minmax(0,1fr)", gap: "24px", padding: "30px 0", borderBottom: "1px solid #1e1e1e"}}>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/a3ee65c5-3a33-4ba1-831f-3633069f3d1c.png"} alt={""} />
                <div>
                  <div style={{font: "500 24px/1.25 'Inter',sans-serif", letterSpacing: "-0.5px"}}>
                    {"Every action logged."}
                  </div>
                  <p style={{margin: "10px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#a8a8a8"}}>
                    {"Prompts, responses and agent actions recorded for review."}
                  </p>
                </div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "52px minmax(0,1fr)", gap: "24px", padding: "30px 0", borderBottom: "1px solid #1e1e1e"}}>
                <img style={{width: "40px", filter: "invert(1)"}} src={"/images/a3ee65c5-3a33-4ba1-831f-3633069f3d1c.png"} alt={""} />
                <div>
                  <div style={{font: "500 24px/1.25 'Inter',sans-serif", letterSpacing: "-0.5px"}}>
                    {"Mapped to your frameworks."}
                  </div>
                  <p style={{margin: "10px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#a8a8a8"}}>
                    {"SEC, FINRA, HIPAA, SOC 2, ISO 27001, GDPR and more."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    ) : null}
    {r.how ? (
      <>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"How we start"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(63px,9.72vw,140px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
              <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
              {"HOW WE START"}
            </div>
            <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "900px", textWrap: "balance"}}>
              {"From day one, a clear plan."}
            </h2>
          </div>
          <div style={{marginTop: "clamp(41px,6.25vw,90px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", border: "1px solid #e6e6e6"}}>
            <div style={{padding: "clamp(20px,3.06vw,44px) clamp(20px,3.06vw,44px) clamp(22px,3.33vw,48px)", borderRight: "1px solid #e6e6e6"}}>
              <div style={{font: "300 clamp(33px,4.44vw,64px)/1 'Inter',sans-serif", letterSpacing: "-0.039em"}}>
                {"20 min"}
              </div>
              <p style={{margin: "18px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#444", maxWidth: "320px"}}>
                {"Average first response, published."}
              </p>
            </div>
            <div style={{padding: "clamp(20px,3.06vw,44px) clamp(20px,3.06vw,44px) clamp(22px,3.33vw,48px)", borderRight: "1px solid #e6e6e6"}}>
              <div style={{font: "300 clamp(33px,4.44vw,64px)/1 'Inter',sans-serif", letterSpacing: "-0.039em"}}>
                {"Every site"}
              </div>
              <p style={{margin: "18px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#444", maxWidth: "320px"}}>
                {"Supported by the same team, in any state."}
              </p>
            </div>
            <div style={{padding: "clamp(20px,3.06vw,44px) clamp(20px,3.06vw,44px) clamp(22px,3.33vw,48px)"}}>
              <div style={{font: "300 clamp(33px,4.44vw,64px)/1 'Inter',sans-serif", letterSpacing: "-0.039em"}}>
                {"With IT"}
              </div>
              <p style={{margin: "18px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#444", maxWidth: "320px"}}>
                {"Beside an internal IT manager, or standing in where there is none."}
              </p>
            </div>
          </div>
          <div style={{marginTop: "clamp(36px,5.56vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "40px"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                <span style={{width: "44px", height: "44px", borderRadius: "50%", background: "#1e4dff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "500 15px 'Inter'", flexShrink: "0"}}>
                  {"01"}
                </span>
                <span style={{flex: "1", height: "1px", background: "repeating-linear-gradient(90deg,#c9c9c9 0 6px,transparent 6px 12px)"}} />
              </div>
              <div style={{marginTop: "34px", font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                {"Take stock."}
              </div>
              <p style={{margin: "16px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444"}}>
                {"A baseline report of devices, accounts, licenses, contracts, data sources and the AI tools already in use, so we both start from the same facts."}
              </p>
            </div>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                <span style={{width: "44px", height: "44px", borderRadius: "50%", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "500 15px 'Inter'", flexShrink: "0"}}>
                  {"02"}
                </span>
                <span style={{flex: "1", height: "1px", background: "repeating-linear-gradient(90deg,#c9c9c9 0 6px,transparent 6px 12px)"}} />
              </div>
              <div style={{marginTop: "34px", font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                {"Agree the scope."}
              </div>
              <p style={{margin: "16px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444"}}>
                {"In writing, with a bill you can read. Scope, fees and the first AI workflow are set out in a written proposal."}
              </p>
            </div>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                <span style={{width: "44px", height: "44px", borderRadius: "50%", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "500 15px 'Inter'", flexShrink: "0"}}>
                  {"03"}
                </span>
                <span style={{flex: "1", height: "1px", background: "repeating-linear-gradient(90deg,#c9c9c9 0 6px,transparent 6px 12px)"}} />
              </div>
              <div style={{marginTop: "34px", font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                {"Start once."}
              </div>
              <p style={{margin: "16px 0 0", font: "400 18px/1.55 'Inter',sans-serif", color: "#444"}}>
                {"One planned start date and a team on the phone. If you have a provider today, we move you once, as agreements end."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"How it runs"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "40px"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                {"HOW IT RUNS"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "600px", textWrap: "balance"}}>
                {"Not a pile of tickets. A rhythm."}
              </h2>
              <div style={{marginTop: "56px", font: "500 22px 'Inter',sans-serif"}}>
                {"Want to see the plan?"}
              </div>
              <div style={{marginTop: "8px", font: "400 18px 'Inter',sans-serif", color: "#555"}}>
                {"Reach out at darren@itiliti.io"}
              </div>
              <div style={{marginTop: "24px"}}>
                <a style={{border: "1px solid #ddd", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#contact"}>
                  {"⇢ BOOK A CALL"}
                </a>
              </div>
            </div>
            <div style={{borderTop: "1px solid #e6e6e6", alignSelf: "start"}}>
              {runs.map((f, i) => (
                <Fragment key={f.num}>
                  <div style={{borderBottom: "1px solid #e6e6e6"}}>
                    <button style={{width: "100%", background: "none", border: "none", padding: "30px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", cursor: "pointer", textAlign: "left", font: "500 24px 'Inter',sans-serif", letterSpacing: "-0.5px", color: "#0a0a0a"}} onClick={f.toggle}>
                      <span style={{display: "flex", alignItems: "center", gap: "16px"}}>
                        <span style={{font: "500 14px 'Inter'", color: "#1e4dff", letterSpacing: "0"}}>
                          {f.num}
                        </span>
                        {f.q}
                      </span>
                      <span style={{font: "300 32px/1 'Inter',sans-serif", width: "30px", textAlign: "center", flexShrink: "0"}}>
                        {f.icon}
                      </span>
                    </button>
                    {f.open ? (
                      <>
                      <p style={{margin: "-6px 0 0", padding: "0 clamp(23px,3.47vw,50px) 30px clamp(17px,2.64vw,38px)", font: "400 18px/1.6 'Inter',sans-serif", color: "#444"}}>
                        {f.a}
                      </p>
                      </>
                    ) : null}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      </>
    ) : null}
    {r.about ? (
      <>
      <section style={{borderTop: "1px dashed #e3e3e3"}} data-screen-label={"Size and coverage"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #e3e3e3", borderRight: "1px dashed #e3e3e3", padding: "clamp(63px,9.72vw,140px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "40px", alignItems: "end"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "18px", height: "7px", flexShrink: "0", background: "linear-gradient(90deg,#1e4dff,#9db6ff)"}} />
                {"SIZE AND COVERAGE"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "980px", textWrap: "balance"}}>
                {"Senior people. One team."}
              </h2>
            </div>
            <p style={{margin: "0", font: "400 19px/1.55 'Inter',sans-serif", maxWidth: "600px"}}>
              {"We manage your technology day to day. Alternative investment firms make up 90% of our client base, so regulatory compliance and data governance are built into how we work."}
            </p>
          </div>
          <div style={{marginTop: "clamp(36px,5.56vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", borderTop: "1px solid #e6e6e6", borderLeft: "1px solid #e6e6e6"}}>
            <div style={{minHeight: "clamp(236px,26.39vw,380px)", padding: "clamp(18px,2.78vw,40px)", background: "linear-gradient(to top,rgba(0,18,90,.78),rgba(0,18,90,.15) 70%),url(\"/images/60ce4242-d9ad-43d6-ba0f-344a449c84a1.png\") center/cover", color: "#fff", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
              <span style={{font: "500 14px 'Inter'", letterSpacing: "0.5px"}}>
                {"CLIENT BASE"}
              </span>
              <div>
                <div style={{font: "300 clamp(57px,7.64vw,110px)/1 'Inter',sans-serif", letterSpacing: "-0.045em"}}>
                  {"90%"}
                </div>
                <div style={{marginTop: "14px", font: "400 17px/1.45 'Inter',sans-serif"}}>
                  {"Alternative investment firms"}
                </div>
              </div>
            </div>
            <div style={{minHeight: "clamp(236px,26.39vw,380px)", padding: "clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
              <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                {"01"}
              </span>
              <div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Senior resources."}
                </div>
                <p style={{margin: "14px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#444"}}>
                  {"An experienced cross functional team."}
                </p>
              </div>
            </div>
            <div style={{minHeight: "clamp(236px,26.39vw,380px)", padding: "clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
              <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                {"02"}
              </span>
              <div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"On the ground."}
                </div>
                <p style={{margin: "14px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#444"}}>
                  {"New York, Washington D.C. and the Carolinas."}
                </p>
              </div>
            </div>
            <div style={{minHeight: "clamp(236px,26.39vw,380px)", padding: "clamp(18px,2.78vw,40px)", borderRight: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
              <span style={{font: "500 14px 'Inter'", color: "#1e4dff"}}>
                {"03"}
              </span>
              <div>
                <div style={{font: "500 30px/1.2 'Inter',sans-serif", letterSpacing: "-0.8px"}}>
                  {"Coast to coast."}
                </div>
                <p style={{margin: "14px 0 0", font: "400 18px/1.5 'Inter',sans-serif", color: "#444"}}>
                  {"Remote support for clients across the United States."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{background: "#000", color: "#fff"}} data-screen-label={"Meet the team"}>
        <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #262626", borderRight: "1px dashed #262626", padding: "clamp(81px,12.50vw,180px) clamp(23px,3.47vw,50px) clamp(79px,12.15vw,175px)"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap"}}>
            <div>
              <div style={{display: "flex", alignItems: "center", gap: "8px", font: "500 16px 'Inter',sans-serif", letterSpacing: "0.5px"}}>
                <span style={{width: "7px", height: "7px", flexShrink: "0", background: "#3b6cf6"}} />
                {"MEET THE TEAM"}
              </div>
              <h2 style={{margin: "28px 0 0", font: "500 clamp(32px,4.31vw,62px)/1.07 'Inter',sans-serif", letterSpacing: "-0.032em", maxWidth: "820px", textWrap: "balance"}}>
                {"The people you will actually talk to."}
              </h2>
            </div>
            <a style={{border: "1px solid #2a2a2a", padding: "12px 28px 12px 16px", minHeight: "53px", display: "inline-flex", alignItems: "center", gap: "14px", textAlign: "left", font: "600 16px 'Inter',sans-serif"}} href={"#"}>
              {"⇢ MEET THE TEAM"}
            </a>
          </div>
          <div className="team-tabs" style={{marginTop: "clamp(34px,5.21vw,75px)", display: "grid", gridTemplateColumns: "repeat(4,minmax(170px,1fr))", overflowX: "auto", border: "1px solid #1e1e1e", borderBottom: "none"}}>
            {teamTabs.map((tb, i) => (
              <Fragment key={tb.tab}>
                <button style={{background: "none", border: "none", borderRight: "1px solid #1e1e1e", borderBottom: "3px solid " + tb.line, minHeight: "68px", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: tb.opacity, color: "#fff", font: "500 17px 'Inter',sans-serif"}} onClick={tb.select}>
                  {tb.tab}
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", border: "1px solid #1e1e1e", borderTop: "none"}}>
            <div style={{minHeight: "clamp(322px,36.11vw,520px)", background: "linear-gradient(to top,rgba(0,18,90,.8),rgba(0,18,90,.1) 65%),url(\"/images/5bba20d1-3b33-4091-ad28-d0ba2998cf44.png\") center/cover", padding: "clamp(16px,2.50vw,36px)", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
              <div style={{font: "300 clamp(83px,11.11vw,160px)/1 'Inter',sans-serif", letterSpacing: "-0.044em"}}>
                {team.count}
              </div>
              <div style={{marginTop: "16px", font: "500 18px 'Inter',sans-serif"}}>
                {team.unit}
              </div>
            </div>
            <div style={{padding: "clamp(16px,2.50vw,36px) clamp(16px,2.50vw,36px) clamp(18px,2.78vw,40px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", borderRight: "1px solid #1e1e1e"}}>
              <div style={{font: "500 36px/1.15 'Inter',sans-serif", letterSpacing: "-1px", textWrap: "balance"}}>
                {team.title}
              </div>
              <div>
                {team.people.map((p, i) => (
                  <Fragment key={`${p.name}-${i}`}>
                    <div style={{display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderTop: "1px solid #1e1e1e"}}>
                      <span style={{width: "44px", height: "44px", borderRadius: "50%", background: "#121626", color: "#9db6ff", display: "flex", alignItems: "center", justifyContent: "center", font: "500 15px 'Inter'", flexShrink: "0"}}>
                        {p.ini}
                      </span>
                      <span style={{display: "flex", flexDirection: "column", gap: "4px"}}>
                        <span style={{font: "500 22px 'Inter',sans-serif", letterSpacing: "-0.4px"}}>
                          {p.name}
                        </span>
                        {p.role ? (
                          <span style={{font: "400 15px 'Inter',sans-serif", color: "#9db6ff"}}>
                            {p.role}
                          </span>
                        ) : null}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{padding: "clamp(16px,2.50vw,36px) clamp(16px,2.50vw,36px) clamp(18px,2.78vw,40px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
              <div style={{font: "500 14px 'Inter',sans-serif", letterSpacing: "0.5px", color: "#9db6ff"}}>
                {team.kicker}
              </div>
              <div>
                <p style={{margin: "0", font: "400 18px/1.55 'Inter',sans-serif", color: "#cfcfcf"}}>
                  {team.note}
                </p>
                <a style={{marginTop: "36px", display: "inline-flex", alignItems: "center", gap: "12px", font: "600 16px 'Inter',sans-serif", padding: "12px 0", marginBottom: "-12px"}} href={"#"}>
                  {"⇢ MEET THE TEAM"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    ) : null}
    <section style={{background: "#000", color: "#fff"}} id={"contact"} data-screen-label={"CTA + Footer"}>
      <div style={{maxWidth: "1700px", margin: "0 auto", borderLeft: "1px dashed #1e1e1e", borderRight: "1px dashed #1e1e1e"}}>
        <div style={{padding: "clamp(68px,10.42vw,150px) clamp(17px,2.57vw,37px) clamp(72px,11.11vw,160px)", borderBottom: "1px dashed #1e1e1e", backgroundImage: "radial-gradient(#0f1a3d 1.2px,transparent 1.3px)", backgroundSize: "38px 38px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", alignItems: "start"}}>
          <h2 style={{margin: "0", font: "500 clamp(37px,5.00vw,72px)/1.02 'Inter',sans-serif", letterSpacing: "-0.035em"}}>
            {"Talk to a real person."}
          </h2>
          <div>
            <p style={{margin: "0", font: "400 19px/1.55 'Inter',sans-serif"}}>
              {"A 30 minute call with a senior engineer. We’ll look at your IT, your data and your AI use, and tell you where to start."}
            </p>
            <div style={{display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap"}}>
              <a style={{background: "#fff", color: "#000", height: "50px", padding: "0 28px 0 10px", display: "flex", alignItems: "center", gap: "12px", font: "600 16px 'Inter',sans-serif"}} href={"#contact"}>
                <span style={{width: "30px", height: "30px", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>
                  {"⇢"}
                </span>
                {"BOOK A CALL"}
              </a>
              <a style={{border: "1px solid #fff", height: "50px", padding: "0 29px", display: "flex", alignItems: "center", font: "600 16px 'Inter',sans-serif"}} href={"mailto:darren@itiliti.io"}>
                {"EMAIL US"}
              </a>
            </div>
            <div style={{marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #1e1e1e", display: "flex", flexWrap: "wrap", gap: "10px 22px", font: "400 17px 'Inter',sans-serif", color: "#cfcfcf"}}>
              <span style={{color: "#fff"}}>
                {"Darren Augi"}
              </span>
              <a style={{display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"mailto:darren@itiliti.io"}>
                {"darren@itiliti.io"}
              </a>
              <a style={{display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"tel:+16316646421"}>
                {"+1 631 664 6421"}
              </a>
              <a style={{display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"https://itiliti.io"}>
                {"itiliti.io"}
              </a>
            </div>
          </div>
        </div>
        <div style={{padding: "clamp(41px,6.25vw,90px) clamp(17px,2.57vw,37px) clamp(41px,6.25vw,90px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "40px", borderBottom: "1px dashed #1e1e1e"}}>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px"}}>
            <div>
              <img style={{height: "44px", width: "auto", filter: "invert(1)"}} src={"/images/9f156f4b-1743-4a0d-9192-aba1eb7ea983.png"} alt={"iTILITi"} />
              <p style={{margin: "20px 0 0", font: "400 18px/1.4 'Inter',sans-serif", color: "#ccc"}}>
                {"iTILITi. Real people. Real AI."}
              </p>
            </div>
            <div style={{font: "400 16px 'Inter',sans-serif", color: "#bbb"}}>
              {"© 2026 "}
              <span style={{color: "#fff"}}>
                {"iTILITi Technology Partners"}
              </span>
              {" LLC"}
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "30px 20px", font: "400 17px 'Inter',sans-serif"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
              <div style={{font: "600 15px 'Inter',sans-serif"}}>
                {"AI"}
              </div>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#ai"}>
                {"Data"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#ai"}>
                {"Custom AI"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#ai"}>
                {"Enterprise AI"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#ai"}>
                {"Copilot"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#ai"}>
                {"Compliance ready AI"}
              </a>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
              <div style={{font: "600 15px 'Inter',sans-serif"}}>
                {"IT AND SECURITY"}
              </div>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#it"}>
                {"Managed IT"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#it"}>
                {"Security"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#it"}>
                {"CxO and CxAI"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#it"}>
                {"Technical services"}
              </a>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
              <div style={{font: "600 15px 'Inter',sans-serif"}}>
                {"COMPANY"}
              </div>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#ai"}>
                {"Platform"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#about"}>
                {"Team"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#it"}>
                {"Security overview"}
              </a>
              <a style={{color: "#aaa", display: "inline-block", padding: "12px 0", margin: "-12px 0"}} href={"#contact"}>
                {"Book a call"}
              </a>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
              <div style={{font: "600 15px 'Inter',sans-serif"}}>
                {"LOCATIONS"}
              </div>
              <span style={{color: "#aaa"}}>
                {"New York"}
              </span>
              <span style={{color: "#aaa"}}>
                {"Washington D.C."}
              </span>
              <span style={{color: "#aaa"}}>
                {"The Carolinas"}
              </span>
            </div>
          </div>
        </div>
        <div style={{padding: "clamp(36px,5.56vw,80px) clamp(17px,2.57vw,37px) clamp(18px,2.78vw,40px)", display: "flex", justifyContent: "center"}}>
          <img style={{width: "100%", maxWidth: "1460px", height: "auto", filter: "invert(1)", opacity: ".9"}} src={"/images/9f156f4b-1743-4a0d-9192-aba1eb7ea983.png"} alt={"iTILITi"} />
        </div>
      </div>
    </section>
    </>
  );
}
