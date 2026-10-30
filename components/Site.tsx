"use client";

import { useEffect, useState } from "react";
import { SiteMarkup } from "@/components/SiteMarkup";
import { init } from "@/lib/motion";

const ROUTES = ["home", "ai", "it", "how", "about"] as const;
type Route = (typeof ROUTES)[number];

const TEAMS = [
  {
    tab: "Delivery leadership",
    title: "CxO, client delivery and management",
    count: "4",
    unit: "Delivery leaders",
    kicker: "DELIVERY LEADERSHIP",
    note: "The leaders who own your roadmap, your delivery and your account.",
    people: ["Darren Augi", "Vincent Nocella", "Nigel Harrison", "Aviral Bhutani"],
  },
  {
    tab: "Operations and engineering",
    title: "Operations, engineering and support leadership",
    count: "3",
    unit: "Operations leaders",
    kicker: "OPERATIONS LEADERSHIP",
    note: "The leaders behind the engineers and support team you reach every day.",
    people: ["Heinrich van Riel", "Andy Shier", "Ewerton Pinheiro"],
  },
  {
    tab: "Technical operations and AI",
    title: "Technical operations, engineering and AI",
    count: "10",
    unit: "Dedicated people",
    kicker: "TECHNICAL OPERATIONS",
    note: "10 dedicated people supporting managed IT, security, leadership, AI and technical services.",
    people: [] as string[],
  },
  {
    tab: "WeLaunch",
    title: "WeLaunch",
    count: "1",
    unit: "Partner",
    kicker: "PARTNER",
    note: "WeLaunch, led by Aviral Bhutani.",
    people: ["Aviral Bhutani"],
  },
] as const;

const RUNS = [
  ["Every day", "People ask for help and reach someone who knows their name. Threats and backups are watched. Suspicious email is investigated. AI agents run their workflows under watch."],
  ["Every month", "A check in on what changed and what comes next. Devices and software kept current, recovery tested, spend and licenses reviewed, AI use and results reviewed."],
  ["Every quarter", "Leadership meets a technology and AI executive about the roadmap, the budget and risk."],
  ["Every year", "Security and AI governance reviewed against what regulators, insurers and customers expect. Recovery plan reviewed."],
  ["When it comes up", "A project appears. A specialist team scopes it around the ask and delivers it."],
] as const;

function initials(name: string) {
  return name
    .split(" ")
    .filter((word) => /^[A-Z]/.test(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}

function routeFromHash() {
  const hash = window.location.hash.slice(1);
  return ROUTES.includes(hash as Route) ? (hash as Route) : null;
}

export function Site() {
  const [route, setRoute] = useState<Route>("home");
  const [menu, setMenu] = useState(false);
  const [teamIndex, setTeamIndex] = useState(0);
  const [runIndex, setRunIndex] = useState(0);

  useEffect(() => {
    const next = routeFromHash();
    if (next) setRoute(next);

    const onHash = () => {
      const hashed = routeFromHash();
      if (!hashed) return;
      setRoute((current) => {
        if (current !== hashed) {
          setMenu(false);
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
        }
        return hashed;
      });
    };

    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    document.body.classList.toggle("nav-open", menu);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    };
  }, [menu]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 980px)");
    const onChange = () => {
      if (media.matches) setMenu(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let stop = () => {};
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      stop = init(document) ?? (() => {});
    }, 60);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      stop();
    };
  }, [route]);

  const current = TEAMS[teamIndex];
  const navc = {
    home: route === "home" ? "#1e4dff" : "inherit",
    ai: route === "ai" ? "#1e4dff" : "inherit",
    it: route === "it" ? "#1e4dff" : "inherit",
    how: route === "how" ? "#1e4dff" : "inherit",
    about: route === "about" ? "#1e4dff" : "inherit",
  };

  return (
    <SiteMarkup
      r={{
        home: route === "home",
        ai: route === "ai",
        it: route === "it",
        how: route === "how",
        about: route === "about",
      }}
      navc={navc}
      menu={menu}
      openMenu={() => setMenu(true)}
      closeMenu={() => setMenu(false)}
      runs={RUNS.map(([q, a], index) => ({
        q,
        a,
        num: "0" + (index + 1),
        open: index === runIndex,
        icon: index === runIndex ? "×" : "+",
        toggle: () => setRunIndex((currentIndex) => (currentIndex === index ? -1 : index)),
      }))}
      teamTabs={TEAMS.map((item, index) => ({
        tab: item.tab,
        line: index === teamIndex ? "#fff" : "transparent",
        opacity: index === teamIndex ? 1 : 0.55,
        select: () => setTeamIndex(index),
      }))}
      team={{
        count: current.count,
        unit: current.unit,
        title: current.title,
        kicker: current.kicker,
        note: current.note,
        people: current.people.map((entry) => {
          const [name, role] = entry.split(" — ");
          return { name, role: role ?? "", ini: initials(name) };
        }),
      }}
    />
  );
}
