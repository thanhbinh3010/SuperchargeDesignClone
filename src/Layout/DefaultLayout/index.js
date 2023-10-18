import Header from "./Header";
import Footer from "./Footer";
import { CourseDataProvider } from "../../component/CourseData/CourseData";
import ScrollToTop from "react-scroll-to-top";
function DefaultLayout({ children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <CourseDataProvider>
      <div>
        <Header></Header>
        <div className="Content">{children}</div>
        <ScrollToTop smooth />
        <Footer />
      </div>
    </CourseDataProvider>
  );
}

export default DefaultLayout;
