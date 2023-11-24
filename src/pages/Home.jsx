import React from "react";
import { Container, Row } from "reactstrap";
import FoodList from "../service/FoodList";
import "../style/home.css";
import Subtitle from "../shared/Subtitle";
import ExerciseList from "../service/ExerciseList";
const Home = () => {
  return (
    <>
      {/* ================nutrition section start ==================== */}
      <section className="section">
        <div className="text-center mb-5">
          <h1 className="title ">Transform your body, transform your life</h1>
        </div>
        <Container>
          <Row>
            <Subtitle subtitle={"Nutrition :"} />
            <FoodList />
          </Row>
        </Container>
      </section>
      {/* ================nutrition section end ==================== */}

      {/* ================Exersice section start ==================== */}
      <section className="exersices" id="exercise">
        <Container>
          <Row>
            <ExerciseList />
          </Row>
        </Container>
      </section>
      {/* ================Exersice section end ==================== */}
    </>
  );
};

export default Home;
