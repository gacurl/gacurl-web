const projects = [
  {
    name: "AssetTrack",
    focus: "Messy asset handoffs made easier to trust",
    description:
      "Problem: assets move, but the record has to hold up. Approach: scan-based work, append-only history, and custody-aware records. Proof point: people can see what was issued, returned, tracked, and why."
  },
  {
    name: "HumanityPro",
    focus: "Service work with clearer next steps",
    description:
      "Problem: human-service work can depend on scattered notes and unclear state. Approach: practical coordination, clear work stages, and tools that support judgment. Proof point: the work becomes easier to follow without pretending people are machines."
  },
  {
    name: "Settled Field Platform",
    focus: "Field work that stops living in someone's head",
    description:
      "Problem: field work gets messy when routes, tasks, and status are hard to see. Approach: organize the flow around where work happens and what needs to happen next. Proof point: operators get a clearer path instead of more guesswork."
  },
  {
    name: "Bowling Green Highlands",
    focus: "Small-business requests made easier to run",
    description:
      "Problem: public requests and local operations need a simple handoff. Approach: request-based intake, operator-managed content, and straightforward verification. Proof point: the business gets a clearer way to receive, manage, and explain the work."
  }
];

export default function ProjectsPage() {
  return (
    <div className="home-stack">
      <section className="content-card">
        <p className="eyebrow">Projects</p>
        <h1>Proof that messy work can become easier to run.</h1>
        <p className="lede">
          These systems show the CurlTech pattern: find the messy work, make
          the flow easier to follow, and build practical tools people can
          actually use.
        </p>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Selected Systems</p>
          <h2>Practical proof points, not polished case-study theater.</h2>
        </div>
        <div className="content-grid">
          {projects.map((project) => (
            <article key={project.name}>
              <p className="proof-label">{project.focus}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
