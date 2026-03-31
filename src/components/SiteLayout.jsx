import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import SiteNavbar from "./SiteNavbar";

export default function SiteLayout() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
