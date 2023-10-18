import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./TabOfContent.scss";

function TabOfContent() {
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setisActive] = useState("overview");
  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "content", label: "Content" },
    { id: "what-inside", label: "What's inside?" },
  ];

  const handleScrollToTarget = (itemId) => {
    const targetElement = document.getElementById(itemId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      const menuHeight = document.getElementById("tab-of-content").offsetHeight;
      targetElement.style.paddingTop = `${menuHeight}px`;
    }
  };

  useEffect(() => {
    const tabOfContent = document.getElementById("tab-of-content");
    const sticky = tabOfContent.offsetTop;

    const handleScroll = () => {
      if (window.scrollY >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (itemId) => {
    setisActive(itemId);
    handleScrollToTarget(itemId);
  };

  return (
    <div className="container-fluid">
      <div
        id="tab-of-content"
        className={isSticky ? "tab-of-content sticky" : "tab-of-content"}
      >
        <div className="tab-of-content__content">
          <ul className="text-dark tab-of-content__links">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <RouterLink
                  to={`#${menuItem.id}`}
                  className={`tab-link ${
                    isActive === menuItem.id ? "active" : ""
                  }`}
                  onClick={() => handleClick(menuItem.id)}
                >
                  {menuItem.label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
        <RouterLink to="">
          <button className="block-button mt-0">Start Learning</button>
        </RouterLink>
      </div>
    </div>
  );
}

export default TabOfContent;
