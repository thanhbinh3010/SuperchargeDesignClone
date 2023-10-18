import { useParams } from "react-router-dom";
import { useCourseData } from "../../../../component/CourseData/CourseData";
import { Link } from "react-router-dom";
import "./Overview.scss";

function Overview() {
  const courseData = useCourseData();
  const { id } = useParams();
  const course = courseData.find((course) => course.CourseID === id);

  return (
    <div className="container">
      <div className="wrapper-inner">
        <div
          className="flex-column align-items-center overview"
          id="overview"
          style={{ position: "relative" }}
        >
          <h4 className="text-center block-heading">{course.CourseHeading}</h4>

          <div className="wrapper has-space">
            <h2 className="text-center block-title">
              Master the
              <span style={{ color: "#de574d" }}> Art of UI/UX Design</span>
            </h2>
          </div>
          <div className="wrapper">
            <div className="block-description">
              <p>
                Welcome to our comprehensive UI/UX design course, where you'll
                embark on a transformative journey to become a proficient
                designer, capable of crafting exceptional user experiences and
                visually stunning interfaces. This course equips you with the
                knowledge, skills, and tools to excel in the dynamic field of
                UI/UX design.
              </p>
              <br />
              <p>
                Throughout this course, you will explore the fundamentals of
                user-centered design, gain hands-on experience with
                industry-standard evelop an eye for aesthetics, and learn to
                create user-friendly, responsive digital products.
              </p>
              <br />
              By the end of this journey, you'll be well-prepared to tackle
              real-world design challenges and embark on a rewarding career in
              UI/UX design. Join us and take the first step towards becoming a
              UI/UX design expert.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
