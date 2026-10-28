"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#solutions", label: "Solutions", chevron: true },
  { href: "#outcomes", label: "Outcomes", chevron: false },
  { href: "#partners", label: "Partners", chevron: false },
  { href: "#about", label: "About", chevron: false },
  { href: "#", label: "Blog", chevron: false },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 840) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.classList.toggle("nav-open", open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className="site-header" style={{ borderBottom: "1px dashed #e3e3e3" }}>
      <div
        className="site-header-bar"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          height: "92px",
          display: "flex",
          alignItems: "center",
          gap: "clamp(20px,3vw,68px)",
          padding: "0 clamp(20px,3vw,50px)",
          whiteSpace: "nowrap",
        }}
      >
        <a href="#hero" style={{ display: "flex", alignItems: "center", flexShrink: "0" }}>
          <img className="site-logo" src="/images/logo.png" style={{ height: "38px", width: "auto" }} alt="ITILITI" />
        </a>
        <nav
          className="site-nav"
          aria-label="Primary"
          style={{
            display: "flex",
            gap: "clamp(18px,2.5vw,48px)",
            font: "400 18px 'Inter',sans-serif",
            flex: "1",
            minWidth: "0",
            overflow: "hidden",
          }}
        >
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} style={link.chevron ? { display: "flex", alignItems: "center", gap: "10px" } : undefined}>
              {link.label}
              {link.chevron ? <span style={{ fontSize: "14px" }}>⌄</span> : null}
            </a>
          ))}
        </nav>
        <div className="site-header-actions">
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            style={{ background: "#000", color: "#fff", font: "600 16px 'Inter',sans-serif", padding: "11px 18px", letterSpacing: "0.2px" }}
          >
            DEMO
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>
      <div id="site-menu" className={open ? "site-menu is-open" : "site-menu"} hidden={!open}>
        {LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            {link.chevron ? <span aria-hidden="true">⌄</span> : null}
          </a>
        ))}
      </div>
    </header>
  );
}
