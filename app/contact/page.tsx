const contactIntents = [
  {
    title: "Workflow cleanup",
    description:
      "When the steps are known by memory, scattered across tools, or harder to explain than they should be."
  },
  {
    title: "Small system modernization",
    description:
      "When an older spreadsheet, form, or internal tool still matters but needs a clearer way forward."
  },
  {
    title: "Project rescue",
    description:
      "When a useful project has stalled, drifted, or needs practical triage before more work is added."
  },
  {
    title: "Operational clarity",
    description:
      "When roles, records, handoffs, or status need to be easier for people to trust and act on."
  },
  {
    title: "Lightweight technical consulting",
    description:
      "When you need a calm second read on scope, tradeoffs, architecture, or the next useful move."
  }
];

const fitGuidance = [
  {
    title: "Good fit",
    description:
      "Small teams with a real workflow problem, a practical system to improve, or a stalled project that needs clearer scope and next steps."
  },
  {
    title: "Not the right fit",
    description:
      "Broad staffing, full-service marketing, always-on support desks, or rush builds where the work and owner are not clear yet."
  }
];

const contactEmail = "greg@curltechllc.com";

export default function ContactPage() {
  return (
    <div className="home-stack">
      <section className="content-card">
        <p className="eyebrow">Contact CurlTech</p>
        <h1>Start a conversation about the work behind the work.</h1>
        <p className="lede">
          Reach out when a workflow needs more clarity, records need more
          reliability, or an operational system needs a practical modernization
          path.
        </p>
      </section>

      <section className="content-card content-card--cta">
        <div className="section-heading">
          <p className="eyebrow">Direct Email</p>
          <h2>Email CurlTech about the work you want to make clearer.</h2>
        </div>
        <p className="lede">
          Send a short note to{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with what the
          work is, where it slows down, and what would be easier to trust.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href={`mailto:${contactEmail}`}>
            Email {contactEmail}
          </a>
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Reach Out About</p>
          <h2>Practical problems are enough to start.</h2>
        </div>
        <div className="content-grid">
          {contactIntents.map((intent) => (
            <article key={intent.title}>
              <h3>{intent.title}</h3>
              <p>{intent.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Fit Check</p>
          <h2>Useful consulting starts with a clear practical problem.</h2>
        </div>
        <div className="content-grid">
          {fitGuidance.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="lede">
          A useful first note can be simple: what the work is, where it slows
          down, who owns it, and what would be easier to trust if the system
          were clearer.
        </p>
      </section>
    </div>
  );
}
