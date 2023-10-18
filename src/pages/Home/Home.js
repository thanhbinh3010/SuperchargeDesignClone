import React, { Fragment } from "react";
import LearningResourcesSection from "../../component/LearningResourcesSection/LearningResourcesSection";
import DesignIndustryStats from "../../component/DesignIndustryStats/DesignIndustryStats";
import FlexibleLearningSection from "../../component/FlexibleLearningSection/FlexibleLearningSection";
import UIMasteryCourseCard from "../../component/UIMasteryCourseCard/UIMasteryCourseCard";
import CourseCardCarousel from "../../component/CourseCardCarousel/CourseCardCarousel";
import DesignExpertiseSection from "../../component/DesignExpertiseSection/DesignExpertiseSection";
import TeamSection from "../../component/TeamSection/TeamSection";
import BlogPostsSection from "../../component/BlogPostsSection/BlogPostsSection";
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
