"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "3+", label: "Major Projects" },
  { value: "4", label: "Languages" },
  { value: "2022", label: "Started CS" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      style={{ borderTop: "1px solid rgba(232,160,32,0.18)" }}
    >
      <div className="container">
        {/* header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* left */}
          <div>
            <motion.p
              className="label"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: "1rem" }}
            >
              01 — About
            </motion.p>

            <motion.h2
              className="display"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "2rem" }}
            >
              Building things
              <br />
              <em style={{ color: "var(--amber)", fontStyle: "italic" }}>that scale.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.88rem",
                  lineHeight: "1.9",
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "1.25rem",
                }}
              >
                I&apos;m a Computer Science student at{" "}
                <span style={{ color: "var(--amber)", fontWeight: 700 }}>
                  Tec de Monterrey
                </span>{" "}
                (graduating June 2026) with a specialization in AI for Data Science.
                I love the full picture — from architecting cloud infrastructure to
                training neural networks from scratch.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.88rem",
                  lineHeight: "1.9",
                  color: "rgba(245,240,232,0.7)",
                }}
              >
                Clean architecture, thoughtful APIs, and systems that hold up
                under real load are what get me excited. Currently looking for
                internships or entry-level roles in backend, AI, or full-stack.
              </p>
            </motion.div>
          </div>

          {/* right — stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.15 * i + 0.3 }}
                style={{
                  border: "1px solid rgba(232,160,32,0.25)",
                  padding: "2rem 1.5rem",
                  background: "rgba(232,160,32,0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "24px",
                    height: "24px",
                    borderTop: "2px solid var(--amber)",
                    borderLeft: "2px solid var(--amber)",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "var(--amber)",
                    lineHeight: 1,
                    fontVariationSettings: '"opsz" 144',
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.value}
                </div>
                <div className="label" style={{ color: "rgba(245,240,232,0.5)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
