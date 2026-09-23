import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import SiteNavbar from "./SiteNavbar";

export default function SiteLayout() {
  const glowRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const glow = glowRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!glow || !finePointer.matches) {
      return undefined;
    }

    let frameId;

    function handlePointerMove(event) {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        glow.style.setProperty("--cursor-x", `${event.clientX}px`);
        glow.style.setProperty("--cursor-y", `${event.clientY}px`);
        glow.classList.add("is-visible");
      });
    }

    function handlePointerLeave() {
      glow.classList.remove("is-visible");
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll("main > section, main > .container-xxl");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 70}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true"></div>
      <SiteNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
