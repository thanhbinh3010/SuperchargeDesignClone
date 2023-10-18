import homeCard1 from '../../assets/img/card/home-card-1.webp'
import homeCard2 from '../../assets/img/card/home-card-2.webp'
import homeCard3 from '../../assets/img/card/home-card-3.webp'
import homeCard4 from '../../assets/img/card/home-card-4.webp'

function DesignIndustryStats() {
  return (
    <div className="container wrapper-container">
      <div className="wrapper-inner">
        <div className="row block-columns">
          <div className="col-lg-3 block-column">
            <div className="wrapper mb-40">
              <div className="row align-items-center block-info-card">
                <div className="col-6 block-info-card__heading">$85k</div>
                <div className="col-6 d-flex align-items-center block-info-card__image">
                  <img src={homeCard1} alt="card" />
                </div>
                <div className="col-12 block-info-card__text">
                  is an average base pay for product designers in the US
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="row align-items-center block-info-card">
                <div className="col-6 block-info-card__heading">84%</div>
                <div className="col-6 d-flex align-items-center block-info-card__image">
                  <img src={homeCard2} alt="card" />
                </div>
                <div className="col-12 block-info-card__text">
                  of designers’ salaries increased in the last 2 years
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 block-column">
            <div className="wrapper mb-40 mt-40">
              <div className="row align-items-center block-info-card">
                <div className="col-6 block-info-card__heading">70%</div>
                <div className="col-6 d-flex align-items-center block-info-card__image">
                  <img src={homeCard3} alt="card" />
                </div>
                <div className="col-12 block-info-card__text">
                  of design teams increased their size in the last year
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="row align-items-center block-info-card">
                <div className="col-6 block-info-card__heading">50k+</div>
                <div className="col-6 d-flex align-items-center block-info-card__image">
                  <img src={homeCard4} alt="card" />
                </div>
                <div className="col-12 block-info-card__text">
                  active job ads on platforms like Glassdoor
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 block-column">
            <div className="block-column ml-50" style={{ padding: 5 }}>
              <div className="wrapper">
                <h4 className="block-heading">
                  PRODUCT DESIGN IS A BOOMING INDUSTRY
                </h4>
              </div>
              <div className="wrapper">
                <h2 className="block-title">
                  Your product design career can be both fulfilling and
                  lucrative
                </h2>
              </div>
              <div className="wrapper">
                <div className="block-description">
                  <p className="">
                    Now more than ever, organizations are aware of the value
                    user-centered design brings. Employers struggle to find
                    qualified designers and the <span>demand</span> keeps
                    growing.
                  </p>
                  <p>
                    As a designer, you have the <span>opportunity</span> to work
                    for various companies, from startups to large corporations.
                    Designers, just as developers, can easily freelance and work
                    remotely, which is another benefit of the product design
                    career.
                  </p>
                  <p>
                    If you’re interested in becoming or are already working as a
                    product or UX/UI designer, you’re at the right place to
                    supercharge your design growth!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignIndustryStats;
