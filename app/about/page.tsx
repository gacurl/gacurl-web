const principles = [
  {
    title: "Messy handoffs need structure",
    description:
      "Operational tools should make ownership, status, and the next action easier to see."
  },
  {
    title: "Records need reliability",
    description:
      "Systems should protect the information people depend on for decisions, follow-up, and accountability."
  },
  {
    title: "Modernization should reduce burden",
    description:
      "Good software removes confusion from the workflow instead of adding another layer to manage."
  },
  {
    title: "Execution should stay disciplined",
    description:
      "Small, verifiable changes keep the work grounded and make progress easier to trust."
  }
];

export default function AboutPage() {
  return (
    <div className="home-stack">
      <section className="content-card">
        <p className="eyebrow">About Greg Curl / CurlTech</p>
        <h1>Veteran-owned systems work for real operational conditions.</h1>
        <p className="lede">
          Greg Curl brings Navy-shaped operational discipline to software work:
          clear workflows, reliable records, practical modernization, and tools
          that reduce confusion instead of creating more of it.
        </p>
      </section>

      <section className="content-card content-card--split">
        <div className="section-heading">
          <p className="eyebrow">Operational Credibility</p>
          <h2>Built from the understanding that systems have to survive handoffs.</h2>
        </div>
        <div className="split-copy">
          <p>
            Operational work rarely fails because a team lacks effort. It
            breaks down when handoffs are unclear, records are hard to trust, or
            tools do not match the way the work actually moves.
          </p>
          <p>
            CurlTech focuses on practical systems thinking: define the workflow,
            reduce avoidable friction, and deliver software in disciplined
            increments that operators can understand and verify.
          </p>
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Working Principles</p>
          <h2>Modernization should make the operation clearer.</h2>
        </div>
        <div className="content-grid">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
