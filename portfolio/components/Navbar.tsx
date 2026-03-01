"use client";

import { motion } from "framer-motion";

const NAV_ITEMS = ["About", "Projects", "Skills", "Contact"];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(232,160,32,0.15)",
        background: "rgba(13,12,10,0.85)",
      }}
    >
      <button
        onClick={() => scrollTo("home")}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.1rem",
          color: "var(--amber)",
          fontVariationSettings: '"opsz" 80',
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        DA
      </button>

      <div style={{ display: "flex", gap: "2rem" }}>
        {NAV_ITEMS.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s.toLowerCase())}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--paper)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              opacity: 0.7,
              transition: "opacity 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "1";
              el.style.color = "var(--amber)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "0.7";
              el.style.color = "var(--paper)";
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
