import CatalogSection from "../components/CatalogSection";
import PageHero from "../components/PageHero";
import usePageSetup from "../hooks/usePageSetup";
import { servicesCatalog, servicesHero } from "../data/siteData";

export default function ServicesPage() {
  usePageSetup("Services | Olange Solutions", "page-service");

  return (
    <>
      <PageHero
        badge={servicesHero.badge}
        title={servicesHero.title}
        description={servicesHero.description}
        nodes={servicesHero.nodes}
        kpis={servicesHero.kpis}
      />
      <CatalogSection
        badge="Our Services"
        title="Services designed to solve real on-site needs"
        description="Every package is shaped around dependable execution, transparent communication, and practical results."
        items={servicesCatalog}
      />
    </>
  );
}
