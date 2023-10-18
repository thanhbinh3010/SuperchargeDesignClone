import teamAndrija from "../../assets/img/team/team-andrija-1.jpg";
import teamAntonio from "../../assets/img/team/team-antonio-2.jpg";
import teamDominik from "../../assets/img/team/team-dominik-1.jpg";
import teamIzabela from "../../assets/img/team/team-izabela-1.jpg";
import teamJure from "../../assets/img/team/team-jure-1.jpg";

function TeamSection() {
  return (
    <div className="pt-xs-0">
      <div className="container">
        <div className="wrapper-container-team">
          <div className="row wrapper-inner">
            <div className="col-lg-5 team-content__left">
              <div className="d-flex image-grid">
                <div
                  className="grid-item"
                  style={{
                    backgroundImage: `url(${teamAndrija})`,
                  }}
                />
                <div
                  className="grid-item"
                  style={{
                    backgroundImage: `url(${teamAntonio})`,
                  }}
                />
                <div
                  className="grid-item"
                  style={{
                    backgroundImage: `url(${teamDominik})`,
                  }}
                />
                <div
                  className="grid-item"
                  style={{
                    backgroundImage: `url(${teamIzabela})`,
                  }}
                />
                <div
                  className="grid-item"
                  style={{
                    backgroundImage: `url(${teamJure})`,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 team-content__right">
              <h4 className="block-heading">
                MEET THE TEAM BEHIND SUPERCHARGE DESIGN
              </h4>
              <h2 className="block-title">
                We are product designers, just like you!
              </h2>
              <div className="wrapper-description">
                <p className="block-description">
                  We wanted to rethink education and build a platform designed
                  for how people actually learn. Learn efficiently, but
                  thoroughly!
                </p>
                <p className="block-description">
                  With Supercharge Design you are not getting a couple of
                  overpriced one-off courses. This is an ever-growing platform
                  filled with specific, accessible, motivating, relevant, and
                  tailored <span>product design</span> learning resources.
                </p>
              </div>
              <div className="wrapper-button">
                <div className="wrapper-button__inner">
                  <a href="">
                    <button className="read-button"> Read Our Story </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
