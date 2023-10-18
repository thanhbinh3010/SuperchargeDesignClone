import astronautImage from "../../assets/img/bg/chargie-astronaut-comp.webp";

function LearningResourcesSection() {
  return (
    <div className="wrapper--has-bg-image">
      <div className="container">
        <div className="wrapper-inner">
          <div className="row align-items-center flex-sm-column-reverse flex-lg-row wrapper__columns">
            <div className="col-lg-6 wrapper__columns-left">
              <div className="flex-colmn">
                <div className="wrapper">
                  <h4 className="block-heading">
                    Superior DESIGN learning resources, all in one place
                  </h4>
                </div>
                <div className="wrapper has-space">
                  <h1 className="block-title">
                    Supercharge your{" "}
                    <span className="block-span">product design</span> skills
                    and career!
                  </h1>
                </div>
                <div className="wrapper">
                  <p className="block-description">
                    Speed up your UX/UI design career growth with our diverse,
                    professionally crafted educational products and resources
                  </p>
                </div>
                <div className="wrapper">
                  <a href="">
                    <button className="block-button">Start Learning</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wrapper__columns-right">
              <img
                src={astronautImage}
                alt="Astronaut"
                className="content-has-img"
          
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningResourcesSection;
