import { useParams } from "react-router-dom";
import { useCourseData } from "../../../../component/CourseData/CourseData";
import "./Content.scss";
function Content() {
  const courseData = useCourseData();
  const { id } = useParams();
  const course = courseData.find((course) => course.CourseID === id);
  return (
    <div className="content" id="content">
      <div className="content-container">
        <h4 className="text-center  text-white block-heading">INTRODUCING</h4>
        <h1 className="text-center text-white content__title">
          {course.CourseName}
        </h1>
        <div className="row content-wrap">
          <div className="col-md-6">
            <div className="text-white block-description">
              <p>
                To our UI/UX design course, your portal to the dynamic world of
                user interface (UI) and user experience (UX) design. Gain
                essential skills in principles, design tools, user-centered
                approaches, wireframing, aesthetics, usability, responsive
                design, collaboration, and portfolio development.
              </p>
              <br /> By the course's conclusion, you'll confidently handle
              real-world design challenges and pioneer innovative solutions.
              Whether a newbie or a skill enhancer, this course empowers you to
              craft user-centric, visually stunning digital products. Join us in
              shaping the digital world as a UI/UX design expert. Enroll today
              to embark on this thrilling journey.
            </div>
          </div>
          <div className="col-md-6">
            <figure className="d-flex justify-content-center">
              <img
                src={course.CourseImage}
                alt={course.CourseName}
                loading="lazy"
                className="content__img"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
