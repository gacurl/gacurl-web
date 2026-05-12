export default function HomePage() {
  return (
    <section className="content-card content-card--home">
      <p className="eyebrow">Welcome</p>
      <h1>Modern web work presented with calm, durable structure.</h1>
      <p className="lede">
        This foundation keeps the experience clear and spacious while leaving
        room for future content, proof, and contact flows.
      </p>
      <div className="content-grid">
        <article>
          <h2>Steady by design</h2>
          <p>
            Shared layout, restrained typography, and a lightweight App Router
            structure provide a maintainable base without locking the site into
            a specific campaign or persona.
          </p>
        </article>
        <article>
          <h2>Ready for expansion</h2>
          <p>
            Services, projects, about, and contact routes are in place as
            placeholders so the site can grow without revisiting the navigation
            shell.
          </p>
        </article>
      </div>
    </section>
  );
}
