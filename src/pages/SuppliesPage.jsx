import CatalogSection from "../components/CatalogSection";
import PageHero from "../components/PageHero";
import usePageSetup from "../hooks/usePageSetup";
import { suppliesCatalog, suppliesHero } from "../data/siteData";

export default function SuppliesPage() {
  usePageSetup("Supplies | Olange Solutions", "page-supplies");

  return (
    <>
      <PageHero
        badge={suppliesHero.badge}
        title={suppliesHero.title}
        description={suppliesHero.description}
        nodes={suppliesHero.nodes}
        kpis={suppliesHero.kpis}
      />
      <CatalogSection
        badge="Our Supplies"
        title="Sourcing categories built for speed, quality, and continuity"
        description="We supply practical essentials and specialized products that help households, teams, and sites stay ready."
        items={suppliesCatalog}
      />
    </>
  );
}
