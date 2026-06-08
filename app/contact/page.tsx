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

      <section className="content-card content-card--split">
        <div className="section-heading">
          <p className="eyebrow">Good Fit</p>
          <h2>Useful starting points for a first conversation.</h2>
        </div>
        <div className="split-copy">
          <p>
            Bring the process that feels harder than it should: handoffs,
            intake, tracking, records, coordination, or status visibility.
          </p>
          <p>
            A useful first note can be simple: what the work is, where it slows
            down, and what would be easier to trust if the system were clearer.
          </p>
        </div>
      </section>
    </div>
  );
}
