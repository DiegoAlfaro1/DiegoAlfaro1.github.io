"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ResumePage() {
  const [pdfFailed, setPdfFailed] = useState(false);

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* ── Top bar ── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(232,160,32,0.15)",
          background: "rgba(13,12,10,0.9)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "var(--amber)",
            fontVariationSettings: '"opsz" 80',
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          DA
        </Link>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--amber)",
            }}
          >
            // Resume
          </span>

          <a
            href="/DiegoAlfaroCV.pdf"
            download="DiegoAlfaroCV.pdf"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              background: "var(--amber)",
              color: "var(--ink)",
              textDecoration: "none",
              border: "2px solid var(--amber)",
              transition: "background 0.2s, color 0.2s",
              cursor: "pointer",
              display: "inline-block",
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
            Download PDF
          </a>

          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              background: "transparent",
              color: "var(--paper)",
              textDecoration: "none",
              border: "2px solid rgba(245,240,232,0.2)",
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
              el.style.borderColor = "rgba(245,240,232,0.2)";
              el.style.color = "var(--paper)";
            }}
          >
            ← Back
          </Link>
        </div>
      </motion.header>

      {/* ── PDF viewer ── */}
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          gap: "1.5rem",
        }}
      >
        {/* decorative label */}
        <div className="label" style={{ alignSelf: "flex-start", maxWidth: 1100 - 64, width: "100%" }}>
          Diego Alfaro Pinto — Curriculum Vitae
        </div>

        {/* amber accent line */}
        <div
          style={{
            alignSelf: "flex-start",
            width: "100%",
            maxWidth: 1100 - 64,
          }}
        >
          <div className="divider" />
        </div>

        {/* PDF embed */}
        {!pdfFailed ? (
          <object
            data="/DiegoAlfaroCV.pdf"
            type="application/pdf"
            style={{
              width: "100%",
              maxWidth: 1100,
              flex: 1,
              minHeight: "80vh",
              border: "1px solid rgba(232,160,32,0.2)",
              background: "var(--slate)",
            }}
            onError={() => setPdfFailed(true)}
          >
            {/* Fallback for browsers that don't support <object> for PDFs */}
            <FallbackView />
          </object>
        ) : (
          <FallbackView />
        )}
      </motion.main>
    </div>
  );
}

function FallbackView() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1100,
        minHeight: "60vh",
        border: "1px solid rgba(232,160,32,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "3rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "rgba(245,240,232,0.5)",
          letterSpacing: "0.05em",
        }}
      >
        Your browser couldn&apos;t render the PDF inline.
      </p>
      <a
        href="/DiegoAlfaroCV.pdf"
        download="DiegoAlfaroCV.pdf"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.75rem 1.75rem",
          background: "var(--amber)",
          color: "var(--ink)",
          textDecoration: "none",
          border: "2px solid var(--amber)",
        }}
      >
        Download PDF instead
      </a>
    </div>
  );
}
