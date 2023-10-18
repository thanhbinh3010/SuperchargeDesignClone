import { useParams } from "react-router-dom";
import { useCourseData } from "../CourseData/CourseData";
import { Link } from "react-router-dom";

function CourseDetail() {
  const courseData = useCourseData();
  const { id } = useParams();

  const course = courseData.find((course) => course.CourseID === id);
  if (!course) {
    // Xử lý trường hợp không tìm thấy khóa học
    return <div>Không tìm thấy khóa học.</div>;
  }

  return (
    <div className="" style={{ padding: "0  0 96px 0" }}>
      <div className="container">
        <div className="wrapper-inner">
          <div className="row align-items-center flex-sm-column-reverse flex-lg-row wrapper__columns">
            <div className="col-lg-6 wrapper__columns-left">
              <div className="flex-column">
                <div className="wrapper">
                  <h4 className="block-heading">{course.CourseHeading}</h4>
                </div>
                <div className="wrapper has-space">
                  <h1 className="block-title">
                    <span className="block-span">{course.CourseTitle}</span>
                  </h1>
                </div>
                <div className="wrapper">
                  <p className="block-description">
                    {course.CourseDescription}
                  </p>
                </div>
                <div className="wrapper">
                  <Link href="">
                    <button className="block-button">Start Learning</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wrapper__columns-right">
              <figure className="img-wrap">
                <img
                  src={course.CourseImageDetail}
                  alt="Astronaut"
                  border="0"
                  className="content-has-img"
                  width="592"
                  height="560"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
