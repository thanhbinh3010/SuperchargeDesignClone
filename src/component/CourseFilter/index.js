import { Fragment } from "react";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useCourseData } from "../CourseData/CourseData";
import "./courseFilter.scss";

function CourseFilter() {
  const [selectedTopic, setSelectedTopic] = useState("All topics");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourseType, setSelectedCourseType] =
    useState("All Content Types");

  const courseData = useCourseData();
  const filterCourses = (topic, courseType) => {
    if (courseData) {
      if (topic === "All topics" && courseType === "All Content Types") {
        // Hiển thị tất cả khóa học khi không có lựa chọn
        return courseData;
      } else if (topic === "All topics") {
        // Lọc theo CourseType khi không có lựa chọn về CourseTopic
        return courseData.filter((course) => course.CourseType === courseType);
      } else if (courseType === "All Content Types") {
        // Lọc theo CourseTopic khi không có lựa chọn về CourseType
        return courseData.filter((course) => course.CourseTag === topic);
      } else {
        // Lọc dựa trên cả CourseTopic và CourseType khi cả hai đều có lựa chọn
        return courseData.filter(
          (course) =>
            course.CourseTag === topic && course.CourseType === courseType
        );
      }
    }
    return [];
  };

  const svgResource = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3v4a1 1 0 0 0 1 1h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
      <path
        d="M18 17h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l5 5v7a2 2 0 0 1-2 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
      <path
        d="M16 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
    </svg>
  );
  const svgFreebie = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-8 0v13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
      <path
        d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 1 1 0-5c.965-.017 1.91.451 2.713 1.343C11.015 5.235 11.638 6.51 12 8c.362-1.49.985-2.765 1.787-3.657.803-.892 1.748-1.36 2.713-1.343a2.5 2.5 0 0 1 0 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
    </svg>
  );
  const svgVideo = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 5H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
      <path
        d="m10 9 5 3-5 3V9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
    </svg>
  );

  const svgWorkbook = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
    </svg>
  );
  const svgProduct = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3v4a1 1 0 0 0 1 1h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
      <path
        d="M18 17h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l5 5v7a2 2 0 0 1-2 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
      <path
        d="M16 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></path>
    </svg>
  );
  const courseTypeIcons = {
    Freebie: svgFreebie,
    "Video Call": svgVideo,
    Course: svgVideo,
    Workbook: svgWorkbook,
    Product: svgProduct,
    Resource: svgResource,
  };

  useEffect(() => {
    const filteredData = filterCourses(selectedTopic, selectedCourseType);
    setFilteredCourses(filteredData);
  }, [courseData, selectedTopic, selectedCourseType]);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="container course__filter">
        <div className="course__select">
          <select
            className="course__topic"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option>All topics</option>
            {Array.from(
              new Set(courseData.map((courseData) => courseData.CourseTag))
            ).map((courseTag) => (
              <option key={courseTag} value={courseTag}>
                {courseTag}
              </option>
            ))}
          </select>
          <select
            className="course__type"
            value={selectedCourseType}
            onChange={(e) => setSelectedCourseType(e.target.value)}
          >
            <option>All Content Types</option>
            {Array.from(
              new Set(courseData.map((courseData) => courseData.CourseType))
            ).map((CourseType) => (
              <option key={CourseType} value={CourseType}>
                {CourseType}
              </option>
            ))}
          </select>
        </div>
        <div className="course__tags">
          <ul className="d-flex list-unstyled">
            <li className="course__tag">All Levels</li>
            <li className="course__tag">Beginer</li>
            <li className="course__tag">Intermediate</li>
          </ul>
        </div>
      </div>
      {/* // product render */}

      <div className="container">
        <div className="course-card__container">
          {filteredCourses.map((course) => (
            <Fragment key={course.CourseID}>
              <LazyLoad height={682} offset={300} threshold={0.95}>
                <div className="course-card">
                  <Link to={`/products/${course.CourseID}`}>
                    <img
                      src={course.CourseImage}
                      alt="{course.CourseName}"
                      className="course-card__img"
                    />
                  </Link>
                  <div className="free-tag">FREE</div>
                  <div className="course-card__wrapper">
                    <div className="course-card__tags">
                      <p className="course-card__tag has-blue-color">
                        {course.CourseTag}
                      </p>
                      <p className="course-card__tag">{course.CourseType}</p>
                    </div>
                    <h3 className="course-card-heading">{course.CourseName}</h3>
                    <div className="course-card__meta-wrapper">
                      <a href="" className="course-card__meta-route">
                        <i className="meta-icon">
                          {courseTypeIcons[course.CourseType]}
                        </i>
                        <span className="course-card____paragraph">
                          {course.CourseType}
                        </span>
                      </a>
                      <div className="course-card__description">
                        40+ lessons · 5+ hours
                      </div>
                    </div>
                  </div>
                </div>
              </LazyLoad>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default CourseFilter;
