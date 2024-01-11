import React from "react";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "reactstrap";
import { forearmImg } from "../utils/workout";
import Subtitle from "../shared/Subtitle";
import { getForearm } from "../utils/wokoutDetail";
import { Dna } from "react-loader-spinner";
import BackToTopButton from "../component/BackToTopButton/BackToTopButton";
import "../style/exercises.css";
const Forearm = () => {
  const [exercise, setExercise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMoreText, setShowMoreText] = useState(false);
  const exerciseRef = useRef();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await getForearm();
        setExercise(response);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        toast.error("An error occurred while fetching data", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, []);

  useEffect(() => {
    if (exerciseRef.current) {
      exerciseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [exercise]);

  useEffect(() => {
    if (exercise.length > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [exercise]);
  useEffect(() => {
    setShowMoreText(exercise.map(() => false));
  }, [exercise]);
  const toggleTextVisibility = (index) => {
    const updatedShowMoreText = [...showMoreText];
    updatedShowMoreText[index] = !updatedShowMoreText[index];
    setShowMoreText(updatedShowMoreText);
  };

  return (
    <section className="section__workout">
      <Container>
        <div className="go__back mb-5 mt-5">
          <span onClick={() => window.history.back()}>
            <svg
              width={70}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path>
            </svg>
          </span>
        </div>
        <Subtitle subtitle={"Abs :"} />
        <Row>
          {loading ? (
            <Dna
              visible={true}
              height="180"
              width="180"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          ) : (
            exercise.map((exerciseItem, index) => (
              <React.Fragment key={index}>
                <Col lg="6" className="pr-5">
                  <div className="mb-4 exercise__img">
                    <img src={forearmImg[index].filename} alt="exercise" />
                  </div>
                </Col>
                <Col lg="6" className="pl-5 mb-5">
                  <div key={index}>
                    <h2 className="instruction__title">{exerciseItem.name}</h2>
                    <p className="instruction__equipment">
                      {exerciseItem.equipment}
                    </p>
                    <p
                      className={`exercise__instructions ${
                        showMoreText[index] ? "exercise__more" : ""
                      }`}
                    >
                      {exerciseItem.instructions}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleTextVisibility(index)}
                    className="showMoreButton"
                  >
                    {showMoreText[index] ? "Show Less" : "Show More"}
                  </button>
                </Col>
              </React.Fragment>
            ))
          )}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Row>
        <div ref={exerciseRef} />
        <BackToTopButton />
      </Container>
    </section>
  );
};

export default Forearm;
