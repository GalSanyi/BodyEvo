import React from "react";
import "../service/success-stories.css";
import { fitnessJourneys } from "../utils/success";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
const SuccessStories = () => {
  return (
    <div>
      <Row>
        {fitnessJourneys.map((item) => (
          <Col lg="4" md="6" key={item.id}>
            <div className="success">
              <div className="success__img">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
              </div>
              <div className="success__text">
                <ul>
                  <li>Starting Weight: {item.startingWeight}kg</li>
                  <li>Goal Weight: {item.goalWeight}kg</li>
                </ul>
                <Link to={`/success-story/${item.name}`}>Read more</Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SuccessStories;
