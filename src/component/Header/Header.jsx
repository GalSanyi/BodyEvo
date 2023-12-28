import "./header.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/1.png";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/community",
    display: "Community",
  },
];

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ================logo satrt=============== */}
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            {/* ================logo end================= */}

            {/* ================menu start================= */}
            <ul className="menu d-flex align-items-center">
              {navLinks.map((item, index) => (
                <li
                  className={`nav__item ${
                    item.path === activeLink ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="nav__bar">
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </div>
                </li>
              ))}
            </ul>
            {/* ================menu end================= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btn d-flex align-items-center ">
                <div className="nav__login">
                  <Button className="btn secondary__btn">
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
                <div className="nav__register">
                  <Button className="btn secondary__btn">
                    <Link to="/register">Register</Link>
                  </Button>
                </div>

                <span className="mobile__menu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
