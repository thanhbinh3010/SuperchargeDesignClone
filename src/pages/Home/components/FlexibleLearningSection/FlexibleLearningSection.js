import learningContent from "../../../../assets/img/learning-content-types-tags-2.webp";
import learningTopic from "../../../../assets/img/learning-topics-tags-1.webp";
import learningLevel from "../../../../assets/img/learning-levels-tags.webp";

function FlexibleLearningSection() {
  return (
    <div className="container wrapper-container">
      <div className="wrapper-inner">
        <div className="wrapper">
          <h4
            className="block-heading text-center"
            style={{ marginBottom: 16 }}
          >
            LEARN PRODUCT DESIGN IN A WAY THAT WORKS FOR YOU
          </h4>
        </div>
        <div className="col-md-8 offset-md-2 text-center wrapper d-flex mx-auto">
          <h2 className="block-title">
            Learning resources created by skilled industry experts for beginners
            and professionals
          </h2>
        </div>
        <div className="wrapper d-flex justify-content-center">
          <div className="row justify-content-center align-items-center learning-style-wrapper">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <h3 className="text-dark fw-bold block-heading">
                  Suitable for all learning styles
                </h3>
                <div className="block-description">
                  <p>
                    Learn in a way that works specifically for you! From free
                    blog articles to courses and 1:1 coaching – it’s all here!
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex col-md-6  justify-content-center">
              <img
                src={learningContent}
                className="learning-style-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="wrapper d-flex justify-content-center mt-5">
          <div className="row justify-content-center align-items-center learning-style-wrapper block-column-reverse">
            <div className="col-md-6 d-flex justify-content-center ">
              <img src={learningTopic} className="learning-style-img" alt="" />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <h3 className="text-dark fw-bold block-heading">
                  Made by designers for designers
                </h3>
                <div className="block-description">
                  <p>
                    Relevant, motivating, and accessible product design and
                    UX/UI design information, all in one place!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper d-flex justify-content-center mt-5">
          <div className="row justify-content-center align-items-center learning-style-wrapper">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <h3 className="text-dark fw-bold block-heading">
                  Built for all levels of experience
                </h3>
                <div className="block-description">
                  <p>
                    It doesn’t matter if you’re just starting out or if you have
                    years of experience, we’ve got you covered!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={learningLevel} className="learning-style-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexibleLearningSection;
