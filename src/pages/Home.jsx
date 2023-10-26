import React from "react";
import { Container, Row } from "reactstrap";
import FoodList from "../service/FoodList";
import "../style/home.css";
import Subtitle from "../shared/Subtitle";

const Home = () => {
  return (
    <>
      <section>
        <h1 className="title text-center">
          Transform your body, transform your life
        </h1>
      </section>
      {/* ================nutrition section start ==================== */}
      <section className="section">
        <Container>
          <Row>
            <Subtitle subtitle={"Nutrition :"} />
            <FoodList />
          </Row>
        </Container>
      </section>
      {/* ================nutrition section end ==================== */}
    </>
  );
};

export default Home;
