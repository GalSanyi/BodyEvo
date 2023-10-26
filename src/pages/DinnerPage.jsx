import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { recipes } from "../assets/data/dinner";
import { v4 as uuidv4 } from "uuid";
import "../style/foods.css";
import Subtitle from "../shared/Subtitle";
import { Link } from "react-router-dom";
const DinnerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="foods">
      <Container>
        <div className="go__back">
          <Link to="/home">
            <span>
              <svg
                width={70}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path>
              </svg>
            </span>
          </Link>
        </div>
        <Row>
          <Subtitle subtitle={"Breakfast :"} />
          {recipes.map((recipe) => (
            <React.Fragment key={uuidv4()}>
              <Col lg="7">
                <div className="breakfast__img mb-5">
                  <img src={recipe.image} alt="" />
                </div>
              </Col>
              <Col lg="5" className="d-flex align-items-center">
                <div className="breakfast__text">
                  <p className="breakfast__text-title">{recipe.name}</p>
                  <p className="breakfast__text-paragraph">
                    {recipe.description}
                  </p>
                  <p className="breakfast__text-paragraph">
                    {recipe.instructions}
                  </p>
                  <p className="breakfast__text-paragraph">
                    {recipe.calories}kcal
                  </p>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DinnerPage;
