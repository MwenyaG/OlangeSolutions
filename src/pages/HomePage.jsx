import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ContentModal from "../components/ContentModal";
import QuoteSection from "../components/QuoteSection";
import usePageSetup from "../hooks/usePageSetup";
import { homePackages, testimonials } from "../data/siteData";

export default function HomePage() {
  const [activePackage, setActivePackage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  usePageSetup("Olange Solutions | Services & Supplies", "page-home");

  function scrollToQuote() {
    document.getElementById("quote-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    if (location.state?.scrollTarget === "quote-form") {
      window.requestAnimationFrame(() => {
        document.getElementById("quote-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.pathname, location.state, navigate]);

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <span className="hero-eyebrow">Service. Supply. Delivery.</span>
              <h1 className="display-1 text-white mb-4">Operational support, delivered simply.</h1>
              <p className="hero-copy">
                Practical services and dependable supplies for homes, teams, and projects that need steady follow-through.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary py-3 px-4" to="/services">
                  Explore Services
                </Link>
                <button
                  className="btn btn-outline-light hero-secondary-btn py-3 px-4"
                  type="button"
                  onClick={scrollToQuote}
                >
                  Request a Quote
                </button>
              </div>
            </div>

            <div className="home-hero-visual" aria-hidden="true">
              <div className="home-hero-glow home-hero-glow-a"></div>
              <div className="home-hero-glow home-hero-glow-b"></div>
              <div className="home-hero-grid-lines"></div>
              <div className="home-hero-core">
                <span className="home-core-label">Olange Solutions</span>
                <strong>Services + Supplies</strong>
                <small>One clear partner for sourcing, support, and delivery.</small>
              </div>
              <div className="home-hero-card home-hero-card-a">
                <i className="fas fa-tools"></i>
                <span>Field support</span>
              </div>
              <div className="home-hero-card home-hero-card-b">
                <i className="fas fa-box-open"></i>
                <span>Supply sourcing</span>
              </div>
              <div className="home-hero-orbit home-hero-orbit-one"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-xxl py-5">
        <div className="container">
          <section className="home-about-section">
            <div className="home-about-copy">
              <span className="section-badge mb-3">Who We Are</span>
              <h2 className="display-6 mb-4">Practical support for homes, offices, and ambitious projects.</h2>
              <p className="home-about-lead">
                We combine hands-on service execution with dependable sourcing support, giving clients one clear partner
                for the work that keeps operations moving.
              </p>
              <p className="home-about-copy-text">
                From maintenance, cleaning, and technical support to essential supplies for offices, homes, and industrial
                environments, our focus is simple: deliver useful solutions with clarity, responsiveness, and follow-through.
              </p>

              <div className="home-about-points">
                <div className="home-about-point">
                  <i className="fas fa-tools"></i>
                  <span>Reliable field and maintenance support</span>
                </div>
                <div className="home-about-point">
                  <i className="fas fa-box-open"></i>
                  <span>Practical supply sourcing for daily operations</span>
                </div>
                <div className="home-about-point">
                  <i className="fas fa-truck-moving"></i>
                  <span>Clear coordination and delivery across needs</span>
                </div>
              </div>

              <div className="home-about-actions">
                <Link className="btn btn-primary py-3 px-4" to="/about">
                  Learn More
                </Link>
                <div className="home-about-note">
                  <strong>One partner</strong>
                  <span>for services, supplies, and responsive follow-through.</span>
                </div>
              </div>
            </div>

            <div className="home-about-visual" aria-hidden="true">
              <div className="home-about-image-card">
                <img src="/img/about.jpg" alt="" className="home-about-image" />
                <div className="home-about-image-overlay"></div>
              </div>
              <div className="home-about-floating home-about-floating-top">
                <span className="home-about-floating-label">What we deliver</span>
                <strong>Services + Supplies</strong>
                <small>One cleaner workflow for sourcing, support, and delivery.</small>
              </div>
              <div className="home-about-floating home-about-floating-bottom">
                <i className="fas fa-headset"></i>
                <div>
                  <strong>Responsive coordination</strong>
                  <small>Clear communication from quote to follow-through.</small>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto section-heading" style={{ maxWidth: 580 }}>
            <p className="section-badge justify-content-center mx-auto">Packages</p>
            <h1 className="display-5 mb-3">Flexible packages built around what you need most</h1>
            <p>Choose focused services, dependable supply delivery, or both as one streamlined partnership.</p>
          </div>

          <div className="row g-4">
            {homePackages.map((item) => (
              <div key={item.title} className="col-lg-6 col-md-6">
                <div className="service-item rounded d-flex h-100">
                  <div className="service-img rounded">
                    <img className="img-fluid" src={item.image} alt={item.imageAlt} />
                  </div>
                  <div className="service-text rounded p-5">
                    <div className="btn-square rounded-circle mx-auto mb-3">
                      <i className={`${item.icon} service-card-icon`} aria-hidden="true"></i>
                    </div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="mb-4">{item.teaser}</p>
                    <button type="button" className="btn btn-sm" onClick={() => setActivePackage(item)}>
                      <i className="fa fa-plus text-primary me-2"></i>Expand
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <QuoteSection />

      <div className="container-xxl py-5" id="testimonials">
        <div className="container">
          <div className="testimonial-showcase">
            <div className="section-heading text-center mx-auto" style={{ maxWidth: 720 }}>
              <p className="section-badge justify-content-center mx-auto">Testimonials</p>
              <h1 className="display-5 mb-3">What working with Olange Solutions can feel like.</h1>
              <p>
                A more polished testimonial section with sliding cards that keeps the page feeling active without looking busy.
              </p>
            </div>

            <div className="testimonial-marquee">
              <div className="testimonial-track">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <article key={`${item.name}-${index}`} className="testimonial-proof-card testimonial-quote-card">
                    <div className="testimonial-proof-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div>
                      <div className="testimonial-stars" aria-label={`${item.rating} star sample testimonial`}>
                        {Array.from({ length: item.rating }).map((_, starIndex) => (
                          <i key={`${item.name}-${index}-${starIndex}`} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p>{item.quote}</p>
                      <h4>{item.name}</h4>
                      <span>
                        {item.role} · {item.company}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="testimonial-marquee testimonial-marquee-reverse">
              <div className="testimonial-track testimonial-track-reverse">
                {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((item, index) => (
                  <article key={`${item.name}-reverse-${index}`} className="testimonial-proof-card testimonial-quote-card">
                    <div className="testimonial-proof-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div>
                      <div className="testimonial-stars" aria-label={`${item.rating} star sample testimonial`}>
                        {Array.from({ length: item.rating }).map((_, starIndex) => (
                          <i key={`${item.name}-reverse-${index}-${starIndex}`} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p>{item.quote}</p>
                      <h4>{item.name}</h4>
                      <span>
                        {item.role} · {item.company}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContentModal item={activePackage} onClose={() => setActivePackage(null)} />
    </>
  );
}
