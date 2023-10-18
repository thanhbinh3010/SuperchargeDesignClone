import Home from "../Home/Home";
import Courses from "../Courses";
import Products from "../Products";
import Freebies from "../Freebies";
import Blog from "../Blog";
import OurStory from "../OurStory";
import Community from "../Community";
import Reviews from "../Reviews";
import ProductDetail from "../ProductDetail";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/courses", component: Courses },
  { path: "/products/:id", component: ProductDetail },
  { path: "/products", component: Products },
  { path: "/freebies", component: Freebies },
  { path: "/blog", component: Blog },
  { path: "/our-story", component: OurStory },
  { path: "/community", component: Community },
  { path: "/reviews", component: Reviews },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
