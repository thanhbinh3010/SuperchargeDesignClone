import psychology from "../../../../assets/img/blog/blog-thumbnail-color-psychology-jpg.webp";
import salary from "../../../../assets/img/blog/blog-thumbnail-design-salaries-jpg.webp";
import productDesign from "../../../../assets/img/blog/blog-thumbnail-product-design-process-jpg.webp";

function BlogPostsSection() {
  return (
    <div className="container blog-post">
      <h4 className="block-heading">SUPERCHARGE DESIGN BLOG</h4>
      <div className="blog-header-wrap">
        <h2 className="block-title">Happy reading!</h2>
        <button className="blog-button">Read All Blog Posts</button>
      </div>
      <div className="swiper-container blog-post__card-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide blog-post__card">
            <img src={psychology} className="card__img" />
            <div className="card__content">
              <div className="card__tags">
                <p className="card__tag has-light-blue-bg-color has-dark-blue-color">
                  UI Design{" "}
                </p>
              </div>
              <div className="card__heading">Color Psychology in UX Design</div>
              <div className="card__meta-wrapper">
                <div className="card__date">30/10/2023</div>
                <div className="card__description">13 min read</div>
              </div>
            </div>
          </div>
          {/*blog post card 2 */}
          <div className="swiper-slide blog-post__card">
            <img src={salary} className="card__img" />
            <div className="card__content">
              <div className="card__tags">
                <p className="card__tag has-dark-cyan-color has-light-cyan-bg-color">
                  UX Design{" "}
                </p>
              </div>
              <div className="card__heading">
                Product Design Process Simplified
              </div>
              <div className="card__meta-wrapper">
                <div className="card__date">02/06/2023</div>
                <div className="card__description">12 min read</div>
              </div>
            </div>
          </div>
          {/*blog post card 3 */}
          <div className="swiper-slide blog-post__card">
            <img src={productDesign} className="card__img" />
            <div className="card__content">
              <div className="card__tags">
                <p className="card__tag has-dark-orange-color  has-light-orange-bg-color">
                  Career{" "}
                </p>
              </div>
              <div className="card__heading">
                An Overview of UX/UI Design Salaries
              </div>
              <div className="card__meta-wrapper">
                <div className="card__date">30/10/2023</div>
                <div className="card__description">13 min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostsSection;
