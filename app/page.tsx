import Link from "next/link";

const capabilities = [
  {
    title: "Operational systems",
    description:
      "Build tools around the actual sequence of work, decisions, handoffs, and records teams rely on every day."
  },
  {
    title: "Practical modernization",
    description:
      "Replace brittle steps with clearer workflows, maintainable software, and changes that fit the operating environment."
  },
  {
    title: "Delivery discipline",
    description:
      "Move in small, verifiable slices so systems improve without losing sight of reliability, ownership, or day-to-day use."
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
          <p className="eyebrow">Capability Summary</p>
          <h2>Operational clarity, turned into software people can run.</h2>
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
          <h2>Proof points from custody, field, service, and small-business workflows.</h2>
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
          <p className="eyebrow">About Snapshot</p>
          <h2>Consulting shaped by operations, service, and software delivery.</h2>
        </div>
        <div className="split-copy">
          <p>
            The working posture is straightforward: understand the workflow,
            find what slows the operation down, and make the next useful
            improvement without adding avoidable complexity.
          </p>
          <p>
            The goal is not generic development capacity. It is operational
            software with clear scope, readable structure, and enough discipline
            to stay useful after launch.
          </p>
        </div>
      </section>

      <section className="content-card content-card--cta">
        <div className="section-heading">
          <p className="eyebrow">Next Step</p>
          <h2>If the work needs clearer structure, start with the operation.</h2>
        </div>
        <p className="lede">
          Use the contact route to discuss workflow bottlenecks, modernization
          priorities, or systems that need a steadier operating foundation.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" href="/contact">
            Go to contact
          </Link>
          <Link className="button button--secondary" href="/projects">
            Review project direction
          </Link>
        </div>
      </section>
    </div>
  );
}
