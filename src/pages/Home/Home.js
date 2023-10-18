import React, { Fragment } from "react";
import LearningResourcesSection from "./components/LearningResourcesSection/LearningResourcesSection";
import DesignIndustryStats from "./components/DesignIndustryStats/DesignIndustryStats";
import FlexibleLearningSection from "./components/FlexibleLearningSection/FlexibleLearningSection";
import UIMasteryCourseCard from "./components/UIMasteryCourseCard/UIMasteryCourseCard";
import CourseCardCarousel from "../../component/CourseCardCarousel/CourseCardCarousel";
import DesignExpertiseSection from "./components/DesignExpertiseSection/DesignExpertiseSection";
import TeamSection from "./components/TeamSection/TeamSection";
import BlogPostsSection from "./components/BlogPostsSection/BlogPostsSection";
function Home() {
  return (
    <Fragment>
      <LearningResourcesSection />
      <DesignIndustryStats />
      <FlexibleLearningSection />
      <UIMasteryCourseCard />
      <CourseCardCarousel />
      <DesignExpertiseSection />
      <TeamSection />
      {/* <BlogPostsSection /> */}
    </Fragment>
  );
}

export default Home;
