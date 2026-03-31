import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

function splitIntoColumns(items) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

export default function ContentModal({ item, onClose }) {
  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const [firstColumn, secondColumn] = splitIntoColumns(item.benefits || []);

  return createPortal(
    <div className="app-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className={`app-modal-panel${item.size === "lg" ? " app-modal-panel-lg" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="content-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="app-modal-header">
          <h5 id="content-modal-title" className="modal-title">
            {item.modalTitle || item.title}
          </h5>
          <button type="button" className="app-modal-close" onClick={onClose} aria-label="Close dialog">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="app-modal-body">
          {item.intro && <p>{item.intro}</p>}

          {item.features?.length ? (
            <ul>
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          ) : null}

          {item.sections?.length
            ? item.sections.map((section) => (
                <div key={section.title} className="mb-3">
                  <h6>{section.title}</h6>
                  <ul className="mb-0">
                    {section.items.map((sectionItem) => (
                      <li key={sectionItem}>{sectionItem}</li>
                    ))}
                  </ul>
                </div>
              ))
            : null}

          {item.outro && <p className="mb-0">{item.outro}</p>}

          {item.benefits?.length ? (
            <div className="mt-4 p-3 rounded app-modal-benefits">
              <h6>
                <i className={`${item.benefitIcon || "fa fa-check-circle"} app-modal-benefit-icon me-2`}></i>
                {item.benefitLabel || "Benefits"}
              </h6>
              <div className="row">
                <div className="col-md-6">
                  {firstColumn.map((benefit) => (
                    <span key={benefit} className="d-block mb-1 app-modal-benefit-text">
                      <i className="fa fa-check-circle app-modal-benefit-check me-1"></i>
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="col-md-6">
                  {secondColumn.map((benefit) => (
                    <span key={benefit} className="d-block mb-1 app-modal-benefit-text">
                      <i className="fa fa-check-circle app-modal-benefit-check me-1"></i>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className={`app-modal-footer${item.actionLink ? " d-flex justify-content-between" : ""}`}>
          <button type="button" className="btn btn-primary py-2 px-4" onClick={onClose}>
            Close
          </button>
          {item.actionLink ? (
            <Link to={item.actionLink} className="btn btn-outline-primary py-2 px-4" onClick={onClose}>
              {item.actionLabel || "View More"}
            </Link>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  );
}
