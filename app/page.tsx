import Link from "next/link";

const capabilities = [
  {
    title: "Operational modernization",
    description:
      "Improve how work moves through a business by clarifying handoffs, reducing friction, and replacing brittle steps with maintainable systems."
  },
  {
    title: "Practical systems thinking",
    description:
      "Translate goals, constraints, and day-to-day realities into structures that people can actually use without adding unnecessary complexity."
  },
  {
    title: "Workflow problem solving",
    description:
      "Focus on the sequence of decisions, tools, and responsibilities behind delivery so improvements hold up under real operating conditions."
  }
];

const proofItems = [
  {
    label: "Project direction",
    title: "Grounded foundations over performative launches",
    description:
      "Work starts with core structure, route clarity, and maintainable delivery seams rather than presentation-first complexity."
  },
  {
    label: "Operational lens",
    title: "Built for teams that need reliability more than novelty",
    description:
      "The emphasis is on making systems easier to run, easier to update, and easier to trust across normal business use."
  },
  {
    label: "Working style",
    title: "Deliberate scope, measurable progress, fewer moving parts",
    description:
      "Each engagement favors the smallest useful change that improves throughput, visibility, or consistency without creating new operational drag."
  }
];

export default function HomePage() {
  return (
    <div className="home-stack">
      <section className="content-card content-card--hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Operationally Grounded Consulting</p>
            <h1>Modernize the work behind the business, not just the surface.</h1>
            <p className="lede">
              gacurl-web is positioned around practical modernization for
              organizations that need clearer workflows, steadier systems, and
              technology choices that support operations instead of distracting
              from them.
            </p>
          </div>
          <div className="hero-aside">
            <p className="hero-note">
              Veteran-owned perspective, with an emphasis on discipline,
              reliability, and work that stands up in day-to-day use.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/contact">
                Start a conversation
              </Link>
              <Link className="button button--secondary" href="/services">
                View service areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Capability Summary</p>
          <h2>Clear thinking applied to operational systems and delivery flow.</h2>
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
          <p className="eyebrow">Operational Proof</p>
          <h2>Evidence of approach lives in structure, scope discipline, and execution style.</h2>
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
          <h2>Consulting shaped by operational thinking and service-driven discipline.</h2>
        </div>
        <div className="split-copy">
          <p>
            The working posture behind this site is straightforward: understand
            the workflow, identify what is slowing the operation down, and make
            improvements that are calm, durable, and proportionate to the
            problem.
          </p>
          <p>
            Veteran-owned credibility matters here not as branding theater, but
            as a signal of accountability, steadiness, and respect for systems
            that people rely on every day.
          </p>
        </div>
      </section>

      <section className="content-card content-card--cta">
        <div className="section-heading">
          <p className="eyebrow">Next Step</p>
          <h2>If the work needs clearer structure, the next move is a direct conversation.</h2>
        </div>
        <p className="lede">
          The contact route is in place as the simplest path forward for scoping
          operational improvements, modernization priorities, or workflow
          bottlenecks.
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
