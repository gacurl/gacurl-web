const projects = [
  {
    name: "AssetTrack",
    focus: "Record integrity and custody workflows",
    description:
      "An asset operations system shaped around append-only history, scan-based work, and custody-aware records."
  },
  {
    name: "HumanityPro",
    focus: "Human-centered coordination",
    description:
      "A service-delivery concept focused on practical coordination, clear work states, and tools that support human judgment."
  },
  {
    name: "Settled Field Platform",
    focus: "Field and workflow systems",
    description:
      "A field operations platform concept organized around route clarity, task flow, and operational visibility."
  },
  {
    name: "Bowling Green Highlands",
    focus: "Public platform delivery",
    description:
      "A local business web system built around request-based intake, operator-managed content, and straightforward verification."
  }
];

export default function ProjectsPage() {
  return (
    <div className="home-stack">
      <section className="content-card">
        <p className="eyebrow">Projects</p>
        <h1>Operational capability demonstrations.</h1>
        <p className="lede">
          Selected systems show how Greg Curl / CurlTech approaches workflow
          clarity, reliable records, admin coordination, public platforms, and
          disciplined implementation.
        </p>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Selected Systems</p>
          <h2>Proof through practical operating problems, not inflated claims.</h2>
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
