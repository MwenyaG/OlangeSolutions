import { useState } from "react";
import ContentModal from "./ContentModal";

export default function CatalogSection({ badge, title, description, items }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto section-heading" style={{ maxWidth: 620 }}>
            <p className="section-badge justify-content-center mx-auto">{badge}</p>
            <h1 className="display-5 mb-3">{title}</h1>
            <p>{description}</p>
          </div>

          <div className="row g-4">
            {items.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <div className="service-item rounded d-flex h-100">
                  <div className="service-img rounded">
                    <img className="img-fluid" src={item.image} alt={item.imageAlt || item.title} />
                  </div>
                  <div className="service-text rounded p-5">
                    <div className="btn-square rounded-circle mx-auto mb-3">
                      <i className={`${item.icon} service-card-icon`} aria-hidden="true"></i>
                    </div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="mb-4">{item.teaser}</p>
                    <button type="button" className="btn btn-sm" onClick={() => setActiveItem(item)}>
                      <i className="fa fa-plus text-primary me-2"></i>Expand
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContentModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
