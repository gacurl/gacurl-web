const serviceAreas = [
  {
    title: "Workflow clarity",
    description:
      "Map how work moves today, identify unclear handoffs, and turn the next useful improvement into a practical system path."
  },
  {
    title: "Records and process integrity",
    description:
      "Improve how teams capture, trust, and use operational records without adding unnecessary process weight."
  },
  {
    title: "Practical modernization",
    description:
      "Replace brittle steps, manual tracking, or outdated tooling with maintainable software that fits the operation."
  },
  {
    title: "Lightweight systems review",
    description:
      "Review an existing workflow, internal tool, or public process and leave with a clearer, scoped next step."
  }
];

export default function ServicesPage() {
  return (
    <div className="home-stack">
      <section className="content-card">
        <p className="eyebrow">Services</p>
        <h1>Practical systems help for operational work.</h1>
        <p className="lede">
          CurlTech helps small teams and internal operations make workflows
          clearer, records easier to trust, and modernization efforts easier to
          scope.
        </p>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Service Areas</p>
          <h2>Focused support for the parts of the operation that need structure.</h2>
        </div>
        <div className="content-grid">
          {serviceAreas.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card content-card--split">
        <div className="section-heading">
          <p className="eyebrow">How It Starts</p>
          <h2>Start with the workflow, then choose the smallest useful move.</h2>
        </div>
        <div className="split-copy">
          <p>
            A first pass usually starts by clarifying the current process: what
            enters the system, who touches it, where records live, and where the
            work gets harder than it should.
          </p>
          <p>
            From there, the next step can stay small: a systems review, a better
            operating model, or a focused implementation slice that is easy to
            verify.
          </p>
        </div>
      </section>
    </div>
  );
}
