import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function handleQuoteNavigation() {
    navigate("/", {
      state: {
        scrollTarget: "quote-form",
        ts: Date.now(),
      },
    });
  }

  return (
    <>
      <div className="container-fluid bg-dark text-light footer mt-5 py-5">
        <div className="container py-5">
          <div className="footer-shell">
            <div className="footer-brand-panel">
              <div className="footer-brand-top">
                <img src="/img/icon/logo1.png" alt="Olange Solutions logo" className="footer-brand-mark" />
                <div>
                  <span className="footer-eyebrow">Olange Solutions</span>
                  <h3>Support that keeps homes, teams, and projects moving.</h3>
                </div>
              </div>
              <p>
                We combine practical services, dependable sourcing, and responsive delivery into one clean operational partner.
              </p>
              <div className="footer-cta-row">
                <button type="button" className="footer-cta" onClick={handleQuoteNavigation}>
                  Request Quote
                </button>
                <a href="tel:+260977304359" className="footer-ghost-link">
                  Call Us
                </a>
              </div>
            </div>

            <div className="footer-link-panel">
              <div>
                <h4 className="text-white mb-4">Quick Links</h4>
                <NavLink className="btn btn-link" to="/about">
                  About Us
                </NavLink>
                <NavLink className="btn btn-link" to="/services">
                  Our Services
                </NavLink>
                <NavLink className="btn btn-link" to="/supplies">
                  Our Supplies
                </NavLink>
              </div>

              <div>
                <h4 className="text-white mb-4">What We Cover</h4>
                <p className="footer-mini-copy">Maintenance and cleaning support</p>
                <p className="footer-mini-copy">Sourcing for offices and projects</p>
                <p className="footer-mini-copy">General supplies and delivery</p>
              </div>
            </div>

            <div className="footer-contact-panel">
              <h4 className="text-white mb-4">Reach Us</h4>
              <div className="footer-contact-card">
                <i className="fa fa-map-marker-alt"></i>
                <span>Plot 15434, Chalala Shantumbu, Lusaka</span>
              </div>
              <div className="footer-contact-card">
                <i className="fa fa-phone-alt"></i>
                <span>+260 97 7304359 | +260 97 9974079</span>
              </div>
              <div className="footer-contact-card">
                <i className="fa fa-envelope"></i>
                <span>olangesolutions@gmail.com</span>
              </div>
              <a
                className="footer-channel-link"
                href="https://whatsapp.com/channel/0029VbAG2Ne0gcfDIFrspe30"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Join our WhatsApp Channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <span className="border-bottom">Olange Solutions</span>, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
