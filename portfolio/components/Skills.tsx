"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillGroup {
  category: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Go", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Node.js", "Express.js", "React", "Gin", "PyTorch", "TensorFlow", "Qt C++"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS, Lambda, API GW)", "GCP", "Docker", "Terraform", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "Alembic"],
  },
  {
    category: "AI / ML",
    items: ["CNN design from scratch", "Mixed Precision Training", "Multi-GPU training", "Model deployment", "Inference APIs"],
  },
  {
    category: "Methodologies",
    items: ["REST API Design", "RBAC", "System Design", "Agile / DAD", "Clean Architecture"],
  },
];

function SkillCard({ group, delay }: { group: SkillGroup; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        border: "1px solid rgba(232,160,32,0.18)",
        padding: "1.75rem",
        position: "relative",
        background: "rgba(232,160,32,0.025)",
      }}
    >
      {/* corner mark */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "20px",
          height: "20px",
          borderBottom: "2px solid var(--amber)",
          borderRight: "2px solid var(--amber)",
        }}
      />

      <p
        className="label"
        style={{
          marginBottom: "1rem",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid rgba(232,160,32,0.15)",
        }}
      >
        {group.category}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {group.items.map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "rgba(245,240,232,0.75)",
              padding: "0.2rem 0.55rem",
              background: "rgba(245,240,232,0.05)",
              border: "1px solid rgba(245,240,232,0.1)",
              lineHeight: 1.8,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section"
      style={{ borderTop: "1px solid rgba(232,160,32,0.18)" }}
    >
      <div className="container">
        <div ref={headerRef} style={{ marginBottom: "4rem" }}>
          <motion.p
            className="label"
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "1rem" }}
          >
            03 — Skills
          </motion.p>

          <motion.h2
            className="display"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Tech{" "}
            <span style={{ color: "var(--amber)" }}>stack.</span>
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1rem",
          }}
        >
          {SKILLS.map((g, i) => (
            <SkillCard key={g.category} group={g} delay={i * 0.07} />
          ))}
        </div>

        {/* language note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "rgba(245,240,232,0.3)",
            marginTop: "2rem",
            letterSpacing: "0.05em",
          }}
        >
          // Languages: English C1 · Spanish Native
        </motion.p>
      </div>
    </section>
  );
}
