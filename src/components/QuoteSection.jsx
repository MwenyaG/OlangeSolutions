import { useState } from "react";
import { quoteOptionMeta, quoteOptions } from "../data/siteData";

export default function QuoteSection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const options = selectedCategory ? quoteOptions[selectedCategory] : [];
  const helperText = !selectedCategory
    ? "Select a category first"
    : selectedCategory === "Services"
      ? "Choose the service you want quoted."
      : "Choose the supply category you want quoted.";

  function handleCategory(category) {
    setSelectedCategory(category);
    setSelectedOption("");
    setShowValidation(false);
  }

  function handleSubmit(event) {
    if (!selectedCategory || !selectedOption) {
      event.preventDefault();
      setShowValidation(true);
    }
  }

  return (
    <div className="container-fluid quote my-5 py-5" id="quote-form">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="bg-white rounded p-4 p-sm-5 quote-card">
              <div className="row g-4 align-items-start">
                <div className="col-lg-5">
                  <div className="quote-intro">
                    <span className="section-badge">Get A Free Quote</span>
                    <h1 className="display-5 mt-3 mb-3">Tell us what you need and we will shape the right response.</h1>
                    <p className="mb-4">
                      Choose whether you need a service or supply request, then pick the exact option so your message
                      reaches us with the right context from the start.
                    </p>
                    <div className="quote-benefit-list">
                      <div className="quote-benefit-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Clear category selection for faster follow-up</span>
                      </div>
                      <div className="quote-benefit-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Visible options based on the request you choose</span>
                      </div>
                      <div className="quote-benefit-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Structured quote requests with less back-and-forth</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <form action="https://formsubmit.co/gmuyeba2001@gmail.com" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="_subject" value="New Quote Request!" />
                    <input type="text" name="_honey" style={{ display: "none" }} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="request_type" value={selectedCategory} />
                    <input type="hidden" name="category" value={selectedCategory} />
                    <input type="hidden" name="service" value={selectedCategory === "Services" ? selectedOption : ""} />
                    <input type="hidden" name="supply" value={selectedCategory === "Supplies" ? selectedOption : ""} />

                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control bg-light border-0" id="gname" name="name" placeholder="Your Name" required />
                          <label htmlFor="gname">Your Name</label>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="email" className="form-control bg-light border-0" id="gmail" name="email" placeholder="Email" required />
                          <label htmlFor="gmail">Email</label>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control bg-light border-0" id="cname" name="mobile" placeholder="Mobile" required />
                          <label htmlFor="cname">Mobile</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="quote-field-block">
                          <span className="quote-label">What do you need a quote for?</span>
                          <div className={`quote-choice-group${showValidation && !selectedCategory ? " is-invalid" : ""}`}>
                            <button
                              className={`quote-choice${selectedCategory === "Services" ? " is-active" : ""}`}
                              type="button"
                              onClick={() => handleCategory("Services")}
                            >
                              <i className="fas fa-briefcase"></i>
                              <span>Services</span>
                            </button>
                            <button
                              className={`quote-choice${selectedCategory === "Supplies" ? " is-active" : ""}`}
                              type="button"
                              onClick={() => handleCategory("Supplies")}
                            >
                              <i className="fas fa-box-open"></i>
                              <span>Supplies</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {selectedCategory ? (
                        <>
                          <div className="col-12 quote-option-stage">
                            <div className="quote-field-block">
                              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-3">
                                <span className="quote-label mb-0">Choose the exact option</span>
                                <span className="quote-helper">{helperText}</span>
                              </div>
                              <div className="quote-option-grid-wrapper">
                                <div className="quote-option-grid">
                                  {options.map((option) => (
                                    <button
                                      key={option}
                                      className={`quote-option-card${selectedOption === option ? " is-active" : ""}`}
                                      type="button"
                                      onClick={() => setSelectedOption(option)}
                                    >
                                      <i className={quoteOptionMeta[selectedCategory][option].icon} aria-hidden="true"></i>
                                      <span>
                                        <strong>{option}</strong>
                                        <small>{quoteOptionMeta[selectedCategory][option].copy}</small>
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {selectedCategory && selectedOption ? (
                        <div className="col-12 quote-selection-summary">
                          Selected {selectedCategory === "Services" ? "service" : "supply"}: {selectedOption}
                        </div>
                      ) : null}

                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control bg-light border-0"
                            placeholder="Message"
                            id="message"
                            name="message"
                            style={{ height: 100 }}
                            required
                          ></textarea>
                          <label htmlFor="message">Tell us about timing, location, quantity, or scope</label>
                        </div>
                      </div>

                      {showValidation && (!selectedCategory || !selectedOption) ? (
                        <div className="col-12">
                          <p className="quote-helper text-danger mb-0">
                            Choose both a request category and a specific option before sending your quote request.
                          </p>
                        </div>
                      ) : null}

                      <div className="col-12 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
                        <p className="quote-helper mb-0">
                          We will use your selection to respond with the most relevant next step.
                        </p>
                        <button className="btn btn-primary py-3 px-4" type="submit">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
