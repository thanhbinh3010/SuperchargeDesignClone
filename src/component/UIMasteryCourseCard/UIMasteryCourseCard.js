import productThumbnailImg from "../../assets/img/vertical-card/product-thumbnail-ui-bundle.webp";

function UIMasteryCourseCard() {
  return (
    <div className="container" style={{ padding: "0 12px" }}>
      <div className="row wrapper-container">
        <div className="vertical-card__left-content col-lg-4">
          <img
            src={productThumbnailImg}
            alt="Product Thumbnail Img"
            className="vertical-card__img"
          />
        </div>
        <div className="vertical-card__right-content col-lg-8">
          <div className="vertical-card__wrapper">
            <h4 className="vertical-card__heading">
              THE ULTIMATE UI DESIGN MASTERY COURSES BUNDLE
            </h4>
            <h2 className="vertical-card__title">
              Fast-track your path to{" "}
              <span
                className="vertical-card__span"
                style={{ color: "#de574d" }}
              >
                UI design mastery
              </span>
              and supercharge your career
            </h2>
            <p className="vertical-card__paragraph">
              <strong style={{ fontWeight: 800, color: "#383a47" }}>
                Elevate your UI design skills
              </strong>{" "}
              and unleash your full design potential. Confidently design
              stunning pixel-perfect web and app interfaces. Apply to
              higher-level design positions, enhance your portfolio, and impress
              your teammates and clients.
            </p>
            <div className="d-flex align-items-center vertical-card__button-wrap">
              <a href="" className="vertical-card__button-details">
                View Details
              </a>
              <h4 className="vertical-card__info">30+ hours</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIMasteryCourseCard;
