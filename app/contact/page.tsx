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
