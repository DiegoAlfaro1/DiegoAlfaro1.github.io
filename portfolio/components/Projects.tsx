"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  index: string;
  title: string;
  period: string;
  context: string;
  bullets: string[];
  tech: string[];
  github?: string;
  release?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "ShroomID",
    period: "Oct 2025 — Dec 2025",
    context:
      "Native Windows app + REST API pipeline to identify mushroom species from images using a CNN trained from scratch.",
    bullets: [
      "Designed and trained a custom 5-layer CNN from scratch with PyTorch — Mixed Precision Training + multi-GPU support.",
      "Built a versioned FastAPI REST API with PostgreSQL integration and Alembic migrations, deployed as Docker Compose microservices.",
      "Developed a cross-platform Qt6/C++ desktop application with drag-and-drop image classification consuming the REST API.",
    ],
    tech: ["PyTorch", "FastAPI", "Docker", "PostgreSQL", "Qt6 / C++"],
    github: "https://github.com/DiegoAlfaro1/ShroomID",
    release: "https://github.com/DiegoAlfaro1/ShroomID/releases/tag/v1.0.0",
    featured: true,
  },
  {
    index: "02",
    title: "Inventory & Employee Management System",
    period: "Feb 2025 — Jun 2025",
    context:
      "Full-stack web app for Altertex — a textile company — to centralize quota management and product inventory.",
    bullets: [
      "Architected scalable application supporting 14+ features: authentication, RBAC, employee/client management, order processing.",
      "Deployed cloud infrastructure on AWS EC2 with Amplify for the frontend; REST API exposed securely through AWS API Gateway.",
      "Implemented Redis rate-limiting middleware — achieved 99.9% uptime during load testing. Reduced deploy time 30% with CI/CD.",
    ],
    tech: ["Node.js", "JavaScript", "AWS EC2", "Redis", "API Gateway", "CI/CD"],
    featured: true,
  },
  {
    index: "03",
    title: "Customer Survey Management App",
    period: "Feb 2024 — Jun 2024",
    context:
      "Customer satisfaction survey platform for Zebrands — automated email delivery, analytics dashboard, and template editor.",
    bullets: [
      "Full-stack app with Express.js backend and EJS frontend; deployed on proprietary server infrastructure.",
      "Implemented CRON job automation for scheduled email delivery and designed full ER models and relational schemas.",
      "Built secure login, search improvements, and UI/UX redesigns with robust error-handling mechanisms.",
    ],
    tech: ["React", "Express.js", "Node.js", "PostgreSQL", "CRON"],
    github: "https://github.com/DiegoAlfaro1/novus-magnusstella",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        border: `1px solid ${hovered ? "var(--amber)" : "rgba(232,160,32,0.2)"}`,
        background: hovered ? "rgba(232,160,32,0.05)" : "rgba(13,12,10,0.6)",
        padding: "2.5rem",
        transition: "border-color 0.3s, background 0.3s",
        cursor: "default",
      }}
    >
      {/* top corner bracket */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: -1,
          width: "32px",
          height: "32px",
          borderTop: `2px solid ${hovered ? "var(--rust)" : "var(--amber)"}`,
          borderLeft: `2px solid ${hovered ? "var(--rust)" : "var(--amber)"}`,
          transition: "border-color 0.3s",
        }}
      />

      {/* index */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "4rem",
          color: "rgba(232,160,32,0.12)",
          lineHeight: 1,
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          fontVariationSettings: '"opsz" 144',
          userSelect: "none",
        }}
      >
        {project.index}
      </div>

      {/* period */}
      <p className="label" style={{ marginBottom: "0.75rem", color: "rgba(245,240,232,0.35)" }}>
        {project.period}
      </p>

      {/* title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.6rem",
          color: hovered ? "var(--amber)" : "var(--paper)",
          lineHeight: 1.15,
          marginBottom: "1rem",
          fontVariationSettings: '"opsz" 80',
          transition: "color 0.25s",
        }}
      >
        {project.title}
      </h3>

      {/* context */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.82rem",
          color: "rgba(245,240,232,0.55)",
          lineHeight: 1.75,
          marginBottom: "1.5rem",
          borderLeft: "2px solid var(--amber)",
          paddingLeft: "0.75rem",
        }}
      >
        {project.context}
      </p>

      {/* bullets */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 1.75rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {project.bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "rgba(245,240,232,0.65)",
              lineHeight: 1.7,
              paddingLeft: "1rem",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--amber)",
                fontWeight: 700,
              }}
            >
              ›
            </span>
            {b}
          </li>
        ))}
      </ul>

      {/* tech chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.25rem 0.65rem",
              border: "1px solid rgba(232,160,32,0.3)",
              color: "var(--amber)",
              background: "rgba(232,160,32,0.06)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* github + release links */}
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--amber)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--amber)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "transparent";
            }}
          >
            ↗ GitHub
          </a>
        )}
        {project.release && (
          <a
            href={project.release}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--paper)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.75rem",
              border: "1px solid rgba(245,240,232,0.2)",
              transition: "border-color 0.2s, color 0.2s",
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
            ↓ Download v1.0.0
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="section"
      style={{ borderTop: "1px solid rgba(232,160,32,0.18)" }}
    >
      <div className="container">
        {/* section header */}
        <div ref={headerRef} style={{ marginBottom: "4rem" }}>
          <motion.p
            className="label"
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "1rem" }}
          >
            02 — Projects
          </motion.p>

          <motion.h2
            className="display"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Selected{" "}
            <span style={{ color: "var(--amber)" }}>work.</span>
          </motion.h2>
        </div>

        {/* cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.index} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
