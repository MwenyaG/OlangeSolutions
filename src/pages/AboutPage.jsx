import PageHero from "../components/PageHero";
import usePageSetup from "../hooks/usePageSetup";
import { aboutCapabilities, aboutHero, teamMembers } from "../data/siteData";

export default function AboutPage() {
  usePageSetup("About | Olange Solutions", "page-about");

  return (
    <>
      <PageHero
        badge={aboutHero.badge}
        title={aboutHero.title}
        description={aboutHero.description}
        nodes={aboutHero.nodes}
        kpis={aboutHero.kpis}
      />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto section-heading" style={{ maxWidth: 620 }}>
            <p className="section-badge justify-content-center mx-auto">Who We Are</p>
            <h1 className="display-5 mb-3">A practical partner for ongoing operations and urgent needs</h1>
            <p>
              We bring service execution, procurement support, and hands-on coordination into one clear, responsive workflow.
            </p>
          </div>

          <div className="about-overview">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <div className="about-story-card h-100">
                  <div className="about-story-badge">
                    <i className="fas fa-layer-group"></i>
                    <span>Integrated support model</span>
                  </div>
                  <h2 className="display-6 mb-4">One team that can source, coordinate, and execute.</h2>
                  <p>
                    At <strong>Olange Solutions</strong>, we support businesses, institutions, and households with the
                    essentials that keep operations moving. That means dependable field services, responsive procurement help,
                    and practical communication throughout the job.
                  </p>
                  <p className="mb-4">
                    From facility maintenance, logistics, and cleaning to fast delivery of stationery, safety gear, tools,
                    and electronic components, we focus on useful support that reduces delays and keeps momentum up.
                  </p>
                  <div className="about-mini-stats">
                    <div className="about-mini-stat">
                      <strong>5+</strong>
                      <span>years of trusted delivery</span>
                    </div>
                    <div className="about-mini-stat">
                      <strong>2 core lines</strong>
                      <span>services and supplies</span>
                    </div>
                    <div className="about-mini-stat">
                      <strong>Flexible</strong>
                      <span>solutions for each client</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="row g-4">
                  {aboutCapabilities.map((capability) => (
                    <div key={capability.title} className="col-md-6">
                      <div className="about-capability-card h-100">
                        <div className="about-capability-icon">
                          <i className={capability.icon}></i>
                        </div>
                        <h5>{capability.title}</h5>
                        <p>{capability.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto section-heading" style={{ maxWidth: 620 }}>
            <p className="section-badge justify-content-center mx-auto">Our Team</p>
            <h1 className="display-5 mb-3">Meet the people behind the delivery</h1>
            <p>Each project benefits from practical coordination, financial discipline, and technical thinking.</p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className={`team-profile-card${index === 1 ? " team-profile-card-featured" : ""}`}
              >
                <div className="team-profile-visual">
                  <img className="team-profile-image" src={member.image} alt={member.name} />
                  <div className="team-profile-focus">{member.focus}</div>
                </div>
                <div className="team-profile-body">
                  <span className="team-role-pill">{member.role}</span>
                  <h4>{member.name}</h4>
                  <p>{member.bio}</p>
                  <a className="team-profile-link" href={member.link} target="_blank" rel="noreferrer">
                    <i className={member.socialIcon}></i>
                    <span>{member.linkLabel}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
