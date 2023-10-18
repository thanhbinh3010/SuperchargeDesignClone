import { Fragment } from "react";
import CourseDetail from "./components/CourseDetail";
import TabOfContent from "./components/TabOfContent";
import Overview from "./components/Overview";
import Content from "./components/Content";
import WhatInside from "./components/WhatInside";

function ProductDetail() {
  return (
    <Fragment>
      <CourseDetail />
      <TabOfContent />
      <Overview />
      <Content />
      <WhatInside />
    </Fragment>
  );
}

export default ProductDetail;
