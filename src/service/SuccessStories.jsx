import React, { useEffect } from "react";

import "../service/success-stories.css";
import { fitnessJourneys } from "../utils/success";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
const SuccessStories = () => {
  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 20));
      localStorage.removeItem("scrollPosition");
    }
  }, []);
  return (
    <div>
      <Row>
        {fitnessJourneys &&
          fitnessJourneys.map((item) => (
            <Col lg="4" md="6" key={item.id}>
              <div className="success mb-5">
                <div className="success__img">
                  <img src={item.image} alt="" />
                </div>
                <div className="success__text">
                  <h3>{item.name}</h3>
                  <p className="success__weight">
                    Starting Weight: {item.startingWeight}kg
                  </p>
                  <p className="success__weight">
                    Goal Weight: {item.goalWeight}kg
                  </p>

                  <Link
                    className="success__button"
                    to={`/success-story/${item.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default SuccessStories;
