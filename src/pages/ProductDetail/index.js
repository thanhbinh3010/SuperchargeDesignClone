import { Fragment } from "react";
import CourseDetail from "../../component/CourseDetail";
import TabOfContent from "../../component/TabOfContent";
import Overview from "../../component/Overview";
import Content from "../../component/Content";
import WhatInside from "../../component/WhatInside";

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
