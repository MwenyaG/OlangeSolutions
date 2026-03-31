export default function PageHero({ badge, title, description, nodes, kpis }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-grid">
          <div className="page-hero-copy">
            <span className="section-badge">{badge}</span>
            <h1 className="display-4 mb-4">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="page-hero-visual" aria-hidden="true">
            <div className="hero-visual-glow"></div>
            <div className="hero-visual-ring hero-visual-ring-one"></div>
            <div className="hero-visual-ring hero-visual-ring-two"></div>
            {nodes.map((node) => (
              <div key={node.label} className={`hero-node ${node.position}`}>
                <i className={node.icon}></i>
                <span>{node.label}</span>
              </div>
            ))}
            {kpis.map((kpi) => (
              <div key={kpi.title} className={`hero-kpi ${kpi.position}`}>
                <strong>{kpi.title}</strong>
                <span>{kpi.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
