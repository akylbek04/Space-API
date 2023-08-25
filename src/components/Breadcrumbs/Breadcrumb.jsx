import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useLocation } from "react-router-dom";

export const BreadcrumbComp = ({id}) => {
  const location = useLocation();
  const { pathname } = location;

  const arr = pathname.split("/").slice(1);
  const fragments = ["/", ...arr];
  let dynamicKey = id;
  const greedyAlgorithms = {
    "/": "Home",
    blogs: "Blogs",
    articles: "Articles",
    reports: "Reports",
    [dynamicKey]: "Current Blog",
  };
  return (
    <>
      <Breadcrumb>
        {fragments.map((fragment, index) => {
          const isLast =  index === fragments.length - 1 
          return isLast ? <BreadcrumbItem active >{greedyAlgorithms[fragment]}</BreadcrumbItem> : <BreadcrumbItem>
            <a href="#">{greedyAlgorithms[fragment]}</a>
          </BreadcrumbItem>
        })}
      </Breadcrumb>
    </>
  );
};
