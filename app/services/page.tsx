import { ConsultationCta } from "../consultation-cta";

const serviceAreas = [
  {
    title: "When the work lives in spreadsheets and email",
    description:
      "CurlTech helps sort the moving pieces, name what needs to be tracked, and shape a cleaner way to run the work."
  },
  {
    title: "When handoffs depend on memory",
    description:
      "Clarify who owns the next step, where status lives, and what records people need before another ball gets dropped."
  },
  {
    title: "When the tool exists, but nobody trusts it",
    description:
      "Find why people work around the system, then improve the workflow so the tool fits the job instead of fighting it."
  },
  {
    title: "When the process grew past its owner",
    description:
      "Review the workflow, expose the hidden steps, and leave with a scoped next move instead of a giant platform plan."
  }
];

export default function ServicesPage() {
  return (
    <div className="home-stack">
      <section className="content-card">
        <p className="eyebrow">Services</p>
        <h1>Help for the work that got too messy to run by memory.</h1>
        <p className="lede">
          CurlTech helps small teams turn messy workflows, scattered tracking,
          and unclear handoffs into simple systems people can actually use.
        </p>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p className="eyebrow">Where This Helps</p>
          <h2>Start with the situation people already recognize.</h2>
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
          <h2>Make the work make sense before building more of it.</h2>
        </div>
        <div className="split-copy">
          <p>
            A first pass starts with the current mess: what comes in, who
            touches it, where tracking happens, what records matter, and where
            the process gets harder than it should.
          </p>
          <p>
            From there, the next step can stay small: cleaner handoffs, simpler
            tracking, a better operating model, or a focused tool that turns
            the workaround into the workflow.
          </p>
        </div>
      </section>

      <ConsultationCta />
    </div>
  );
}
