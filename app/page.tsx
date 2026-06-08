import Link from "next/link";
import { ConsultationCta } from "./consultation-cta";

const capabilities = [
  {
    title: "Clean up the flow",
    description:
      "Map how the work really moves, then turn scattered steps into a path people can follow."
  },
  {
    title: "Make records easier to trust",
    description:
      "Help teams see what happened, what changed, and what needs attention without chasing side notes."
  },
  {
    title: "Build the next useful piece",
    description:
      "Keep the work scoped, practical, and easy to verify so the fix does not become another workaround."
  }
];

const proofItems = [
  {
    label: "AssetTrack",
    title: "Custody-aware asset operations",
    description:
      "An offline-first asset custody system shaped around append-only history, scan workflows, and audit-friendly operating records."
  },
  {
    label: "HumanityPro",
    title: "Human-service workflow support",
    description:
      "Product direction focused on practical service delivery, clearer coordination, and software that supports real human work."
  },
  {
    label: "Settled Field Platform",
    title: "Field operations structure",
    description:
      "A field-work platform concept centered on route clarity, task flow, and operational visibility without unnecessary overhead."
  },
  {
    label: "Bowling Green Highlands",
    title: "Request-based local business systems",
    description:
      "A small-business web system shaped around clear public requests, operator-managed content, and simple verification paths."
  }
];

export default function HomePage() {
  return (
    <div className="home-stack">
      <section className="content-card content-card--hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CurlTech</p>
            <h1>Simple systems for messy work.</h1>
            <p className="lede">
              CurlTech helps small teams turn scattered spreadsheets, email
              handoffs, and unclear processes into practical tools people can
              actually use.
            </p>
          </div>
          <div className="hero-aside">
            <p className="hero-note">
              Useful when the work lives in too many places: tracking, records,
              status, handoffs, and the unwritten steps one person has to
              remember.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/contact">
                Talk through a messy workflow
              </Link>
              <Link className="button button--secondary" href="/services">
                See how CurlTech helps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">What Gets Clearer</p>
          <h2>Cleaner handoffs, steadier records, and tools people can actually use.</h2>
        </div>
        <div className="feature-grid">
          {capabilities.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Selected Systems</p>
          <h2>Practical proof from messy custody, field, service, and small-business work.</h2>
        </div>
        <div className="proof-list">
          {proofItems.map((item) => (
            <article className="proof-item" key={item.title}>
              <p className="proof-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card content-card--split">
        <div className="section-heading">
          <p className="eyebrow">How It Works</p>
          <h2>Start with the work as it is. Build what helps next.</h2>
        </div>
        <div className="split-copy">
          <p>
            The first move is simple: understand the workflow, find where it
            slows down, and make the next useful improvement without adding
            avoidable complexity.
          </p>
          <p>
            The goal is not generic development capacity. It is a practical
            system with clear scope, readable structure, and enough discipline
            to stay useful after launch.
          </p>
        </div>
      </section>

      <ConsultationCta />
    </div>
  );
}
