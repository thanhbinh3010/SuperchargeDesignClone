import { createContext, useContext, useEffect, useState } from "react";

const CourseDataContext = createContext();

export function useCourseData() {
  return useContext(CourseDataContext);
}

export function CourseDataProvider({ children }) {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Fetch data from API and update the state
    fetch("https://61244020124d880017568602.mockapi.io/Course")
      .then((response) => response.json())
      .then((data) => {
        setCourseData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!courseData) {
    return <div>Loading...</div>;
  }
  return (
    <CourseDataContext.Provider value={courseData}>
      {children}
    </CourseDataContext.Provider>
  );
}
