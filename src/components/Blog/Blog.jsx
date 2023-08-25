import { Card, CardTitle, CardText, CardImgOverlay, CardImg } from "reactstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BreadcrumbComp } from "../Breadcrumbs/Breadcrumb";

export const Blog = () => {
  const params = useParams();
  console.log(useParams);
  const url = `https://api.spaceflightnewsapi.net/v4/blogs/${params.id}`;

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad request");
      const data = await res.json();
      setBlog(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="col-sm-6">
    <BreadcrumbComp id={blog.id} />
      <Card inverse>
        <CardImg
          alt={blog.title}
          src={blog.image_url}
          style={{
            height: 270,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">{blog.title}</CardTitle>
          <CardText>
            {blog.summary}
          </CardText>
          <CardText>
            <small className="text-muted">Published by: {blog.news_site}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};
