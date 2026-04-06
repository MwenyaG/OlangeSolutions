import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

function navLinkClass({ isActive }) {
  return `nav-item nav-link${isActive ? " active" : ""}`;
}

export default function SiteNavbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [navOpen, setNavOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const packagesActive = pathname === "/services" || pathname === "/supplies";

  useEffect(() => {
    setNavOpen(false);
    setPackagesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setPackagesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleQuoteNavigation() {
    navigate("/", {
      state: {
        scrollTarget: "quote-form",
        ts: Date.now(),
      },
    });
    setNavOpen(false);
    setPackagesOpen(false);
  }

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg navbar-light sticky-top p-0 site-navbar${isScrolled ? " is-scrolled" : ""}`}
    >
      <div className="container-fluid px-3 px-lg-4">
        <div className="nav-shell">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="/img/icon/logo1.png" alt="Olange Solutions logo" className="brand-mark me-3" />
            <div className="d-flex flex-column">
              <span className="brand-status">Service and supply partner</span>
              <h1 className="m-0 brand-name">Olange Solutions</h1>
              <small className="brand-tagline">Where Service Meets Supply, Excellence Follows</small>
            </div>
          </Link>

          <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <div className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle nav-dropdown-button${packagesActive ? " active" : ""}`}
                  type="button"
                  aria-expanded={packagesOpen}
                  onClick={() => setPackagesOpen((isOpen) => !isOpen)}
                >
                  Packages
                </button>
                <ul
                  className={`dropdown-menu dropdown-menu-end bg-light shadow-sm border-0${packagesOpen ? " show" : ""}`}
                >
                  <li>
                    <NavLink to="/services" className={({ isActive }) => `dropdown-item${isActive ? " active" : ""}`}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/supplies" className={({ isActive }) => `dropdown-item${isActive ? " active" : ""}`}>
                      Supplies
                    </NavLink>
                  </li>
                </ul>
              </div>
              <button type="button" className="mobile-quote-link d-lg-none" onClick={handleQuoteNavigation}>
                Request Quote
              </button>
            </div>
          </div>

          <div className="nav-actions d-flex align-items-center ms-lg-4">
            <button type="button" className="quote-pill d-none d-lg-inline-flex" onClick={handleQuoteNavigation}>
              <i className="bi bi-chat-square-text-fill"></i>
              <span>Request Quote</span>
            </button>
            <a href="tel:+260977304359" className="contact-pill d-none d-xl-inline-flex">
              <i className="bi bi-telephone-fill"></i>
              <span>Call Us</span>
            </a>
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle color mode"
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              <i className="bi bi-sun-fill"></i>
              <i className="bi bi-moon-stars-fill"></i>
            </button>
            <button
              className={`navbar-toggler ms-2${navOpen ? "" : " collapsed"}`}
              type="button"
              aria-controls="navbarCollapse"
              aria-expanded={navOpen}
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((isOpen) => !isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
