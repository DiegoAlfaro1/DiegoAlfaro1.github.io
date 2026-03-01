"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LINKS = [
  {
    label: "GitHub",
    handle: "@DiegoAlfaro1",
    url: "https://github.com/DiegoAlfaro1",
  },
  {
    label: "LinkedIn",
    handle: "diego-alfaro",
    url: "https://www.linkedin.com/in/diego-alfaro-a2b98726b/",
  },
  {
    label: "Email",
    handle: "diegoalfaropinto12@gmail.com",
    url: "mailto:diegoalfaropinto12@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      style={{ borderTop: "1px solid rgba(232,160,32,0.18)", paddingBottom: "5rem" }}
    >
      <div className="container">
        <motion.p
          className="label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "1rem" }}
        >
          04 — Contact
        </motion.p>

        <motion.h2
          className="display"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.5rem" }}
        >
          Let&apos;s work
          <br />
          <span style={{ color: "var(--amber)" }}>together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.88rem",
            color: "rgba(245,240,232,0.55)",
            lineHeight: 1.85,
            maxWidth: "520px",
            marginBottom: "3.5rem",
          }}
        >
          Looking for internships or entry-level roles in backend, AI, or
          full-stack development. Open to teams that value curiosity and ship
          great software. Drop me a message.
        </motion.p>

        {/* link rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.5rem 0",
                borderBottom: "1px solid rgba(232,160,32,0.15)",
                textDecoration: "none",
                color: "var(--paper)",
                gap: "2rem",
              }}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.99 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <span className="label" style={{ color: "rgba(245,240,232,0.3)", minWidth: "80px" }}>
                  {link.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                  }}
                >
                  {link.handle}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.2rem",
                  color: "var(--amber)",
                }}
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ─── Footer ─── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        style={{
          marginTop: "6rem",
          padding: "2rem",
          borderTop: "1px solid rgba(232,160,32,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "var(--max-w)",
          margin: "6rem auto 0",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "var(--amber)",
            fontVariationSettings: '"opsz" 80',
          }}
        >
          Diego Alfaro.
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "rgba(245,240,232,0.25)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()} — Built with Next.js + Framer Motion
        </span>
      </motion.footer>
    </section>
  );
}
