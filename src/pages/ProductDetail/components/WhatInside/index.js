import "./WhatInside.scss";

function WhatInside() {
  const svgIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.065 4.79-8.75 9.562h5.5l-2.5 6.439 9-9.561h-5.5l2.25-6.44z"
        fill="currentColor"
      ></path>
    </svg>
  );
  return (
    <div className="container-fluid what-inside" id="what-inside">
      <div className="what-inside__content">
        <h4 className="text-center block-heading">WHAT’S INSIDE</h4>
        <h2 className="text-center block-title">
          This is your
          <span style={{ color: "rgb(222, 87, 77)" }}>
            {" "}
            map to your dream job
          </span>
        </h2>
        <div className="row align-items-center justify-content-center what-inside__wrap">
          <div className="col-md-6">
            <figure className="d-flex justify-content-center">
              <img
                src="https://supercharge.design/wp-content/uploads/2023/08/the-ultimate-ui-elements-guide-preview-pages-2.webp"
                alt="what's inside"
                className="what-inside__img"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <ul>
              <p className="what-inside__title">
                Inside the Course: What You'll Access
              </p>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                More than 50 Essential UI/UX Elements
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                In-Depth Definitions
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                Practical Use Cases
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                Detailed Architectural Insights
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                Exploration of States and Styles
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                Common Variations
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                Real-World Examples
              </li>
              <li className="what-inside__list-item">
                <i className="what-inside__icon" data-id="1433e761">
                  {svgIcon}
                </i>
                Pro Tips and Tricks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatInside;
