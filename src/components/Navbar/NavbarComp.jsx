import "./NavbarComp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { BsFillRocketFill } from "react-icons/bs";
import { PiArticleMediumFill } from "react-icons/pi";
import { GrBlog } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { Wrapper } from "../Styled-Components/Style";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {!isOpen && (
        <BsFillRocketFill
          className="space-icon"
          style={{}}
          onClick={() => setIsOpen(true)}
          hover
        />
      )}

      <Offcanvas
        className="body-offcanvas"
        toggle={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <OffcanvasHeader  className="p-1 m-0 mb-3" toggle={() => setIsOpen(false)}>

        </OffcanvasHeader>
        <OffcanvasBody className="p-0 m-0">
          <div className="headline">Menu</div>
          <Link to="/articles" onClick={() => setIsOpen(false)}>
            <Wrapper>
              <PiArticleMediumFill className="p-0 m-0" />
              <p className="m-0 p-0 ps-1">Articles</p>
            </Wrapper>
          </Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>
            <Wrapper>
              <GrBlog className="p-0  m-0" />
              <p className="m-0 p-0 ps-1">Blogs</p>
            </Wrapper>
          </Link>
          <Link to="/reports" onClick={() => setIsOpen(false)}>
            <Wrapper>
              <TbReportAnalytics className="p-0  m-0" />
              <p className="m-0 p-0 ps-1">Reports</p>
            </Wrapper>
          </Link>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};
