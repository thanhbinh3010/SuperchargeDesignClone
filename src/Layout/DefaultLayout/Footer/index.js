import "../Footer/footer.scss";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#f5f5f7", color: "#1f2029" }}
    >
      {/* Grid container */}
      <div className="container p-4 pb-0 ">
        {/* Section: Links */}
        <section className="footer-container">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="d-flex flex-column justify-content-between col-lg-4 col-md-6 mb-4 mb-md-0">
              <img
                src="https://supercharge.design/wp-content/uploads/2021/08/footer-logo.svg"
                alt="logo footer"
                className="footer-logo"
              />
              <h3 className="text-uppercase footer-copyright">
                {" "}
                Copyright © 2023 · Supercharge Design
              </h3>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase mb-5">EXPLORE</h3>
              <ul className="list-unstyled mb-0 footer-list">
                <li>
                  <a href="#!" >
                    Team Plans
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Join Community
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase mb-5">LEARN</h3>
              <ul className="list-unstyled mb-0 footer-list">
                <li>
                  <a href="#!" >
                    Advanced Figma Course
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    UI Colors Masterclass
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    UI Typography Masterclass
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    All Products & Freebies
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Suggest a Topic
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase mb-5 footer">LEGAL</h3>
              <ul className="list-unstyled mb-0 footer-list">
                <li>
                  <a href="#!" >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Company
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase mb-5">FOLLOW</h3>
              <ul className="list-unstyled mb-0 footer-list">
                <li>
                  <a href="#!" >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" >
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </section>
      </div>
    </footer>
  );
}

export default Footer;
