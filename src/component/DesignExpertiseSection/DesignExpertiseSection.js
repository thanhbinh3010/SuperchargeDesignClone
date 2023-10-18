import chargiePlant from "../../assets/img/chargie-plant-1.webp";

function DesignExpertiseSection() {
  return (
    <div className="container">
      <div className="row wrapper-container pt-xs-0">
        <div className="col-lg-6">
          <h4 className="block-heading">
            CONTINUOUSLY GROW YOUR DESIGN EXPERTISE
          </h4>
          <h2 className="block-title">
            You can count on regular updates and fresh, relevant releases
          </h2>
          <div className="wrapper-description">
            <p className="block-description">
              Stay in the loop! As the industry grows, so do our resources.
              Unlike traditional schools or one-off online courses, we’ll keep
              you updated by improving the existing free and paid content, and
              releasing new ones <span>regularly!</span>
            </p>
            <p className="block-description">
              Everyone learns differently. Supercharge your product design
              career in a way that works for you – with books, courses,
              freebies, blog posts, design competitions, coaching options, and
              more.
            </p>
          </div>
          <div className="wrapper-button">
            <div className="wrapper-button__inner">
              <a href="">
                <button className="suggest-button">Suggest a Topic</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="wrapper-img">
            <img src={chargiePlant} className="content-has-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignExpertiseSection;
