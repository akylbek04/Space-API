import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { BreadcrumbComp } from "../Breadcrumbs/Breadcrumb";
export const Blogs = ({ data }) => {
  return (
    <div>
      <BreadcrumbComp />
      <ListGroup className="container">
        {data?.map((item) => {
          console.log(item);
          return (
            <Link to={`/blogs/${item.id}`} key={item.id} className="col-sm-6">
              <ListGroupItem >{item.title}</ListGroupItem>
            </Link>
          );
        })}
      </ListGroup>
    </div>
  );
};
