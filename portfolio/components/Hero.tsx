"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const ROLES = [
  "Backend Engineer",
  "Systems Designer",
  "ML Engineer",
  "Full-Stack Builder",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "0 2rem",
      }}
    >
      {/* ─ hero content ─ */}
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", width: "100%" }}>
        {/* index label */}
        <motion.div
          className="label"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: "1.5rem" }}
        >
          &#47;&#47; Portfolio v1.0 — Queretaro, MX
        </motion.div>

        {/* name */}
        <motion.h1
          className="display"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "var(--paper)", marginBottom: "0.5rem" }}
        >
          Diego
          <br />
          <span style={{ color: "var(--amber)" }}>Alfaro.</span>
        </motion.h1>

        {/* typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            color: "rgba(245,240,232,0.55)",
            marginBottom: "2.5rem",
            minHeight: "2em",
          }}
        >
          <span style={{ color: "var(--rust)" }}>&#62; </span>
          {typed}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "var(--amber)",
              marginLeft: "3px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.85rem 2rem",
              background: "var(--amber)",
              color: "var(--ink)",
              textDecoration: "none",
              border: "2px solid var(--amber)",
              transition: "background 0.2s, color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--amber)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--amber)";
              el.style.color = "var(--ink)";
            }}
          >
            View Projects
          </button>
          <Link
            href="/resume"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.85rem 2rem",
              background: "transparent",
              color: "var(--paper)",
              textDecoration: "none",
              border: "2px solid rgba(245,240,232,0.25)",
              transition: "border-color 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--amber)";
              el.style.color = "var(--amber)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(245,240,232,0.25)";
              el.style.color = "var(--paper)";
            }}
          >
            View CV
          </Link>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--paper)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "1px",
              height: "40px",
              background: "var(--amber)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          Scroll
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}
