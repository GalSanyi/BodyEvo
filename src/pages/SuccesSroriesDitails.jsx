import React from "react";
import { useEffect } from "react";
import "../service/success-stories.css";
import { Link, useParams } from "react-router-dom";
import { fitnessJourneys } from "../utils/success";
import { Container, Row, Col } from "reactstrap";
const SuccesSroriesDitails = () => {
  const { id } = useParams();

  const formattedId = id.replace(/\s+/g, "-").toLowerCase();
  const selectedStory = fitnessJourneys.find(
    (item) => item.name.replace(/\s+/g, "-").toLowerCase() === formattedId
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleBackClick = () => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  if (!selectedStory) {
    return <h1>Story not found</h1>;
  }
  return (
    <>
      <div className="healthy__story-img">
        <h1 className="healthy__story-title">SUCCESS STORIES</h1>
      </div>
      <Container>
        <div className="back">
          <Link
            to="/"
            className="go__back-success mb-5 mt-5"
            onClick={handleBackClick}
          >
            ← back to success stories
          </Link>
        </div>
        <div className="success__underline"></div>
        <Row>
          <Col lg="6">
            <p className="succes__description">{selectedStory.description}</p>
          </Col>
          <Col lg="6">
            <img
              src={selectedStory.image}
              alt=""
              className="success__detail-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SuccesSroriesDitails;
