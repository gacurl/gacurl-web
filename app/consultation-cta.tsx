import Link from "next/link";

export function ConsultationCta() {
  return (
    <section className="content-card content-card--cta">
      <div className="section-heading">
        <p className="eyebrow">Practical Consultation</p>
        <h2>Talk through the workflow before building more.</h2>
      </div>
      <p className="lede">
        Share what the work is, where it slows down, and what would be easier
        to run if the system made more sense.
      </p>
      <div className="hero-actions">
        <Link className="button button--primary" href="/contact">
          Start a practical conversation
        </Link>
      </div>
    </section>
  );
}
