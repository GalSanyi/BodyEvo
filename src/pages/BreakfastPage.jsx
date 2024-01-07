import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getBreakfast } from "../utils/fetchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import noFood from "../assets/images/no-food.jpg";
import BackToTopButton from "../component/BackToTopButton/BackToTopButton";
import { Dna } from "react-loader-spinner";
import Subtitle from "../shared/Subtitle";

const BreakfastPage = () => {
  const [popular, setPopular] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const check = localStorage.getItem("breakfastPopular");
        if (check) {
          setPopular(JSON.parse(check));
        } else {
          const recipes = await getBreakfast();
          localStorage.setItem("breakfastPopular", JSON.stringify(recipes));
          setPopular(recipes);
        }
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

    fetchData();
  }, []);

  const handleInstructionsClick = (recipeId) => {
    setActiveTab(`instructions_${recipeId}`);
  };

  const handleIngredientsClick = (recipeId) => {
    setActiveTab(`ingredients_${recipeId}`);
  };

  return (
    <section className="section__food">
      <Container>
        <div className="go__back mb-5 mt-5">
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
        <Subtitle subtitle={"Breakfast :"} />
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
            popular.map((item) => (
              <React.Fragment key={item.id}>
                <Col lg="6">
                  <div className="breakfast__card">
                    <h4 className="breakfast__title mb-4">{item.title}</h4>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = noFood;
                        }}
                      />
                    ) : (
                      <img src={noFood} alt={item.title} />
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div className="text-center mb-5">
                    <Button
                      outline
                      color="info"
                      className={`${
                        activeTab === `instructions_${item.id}` ? "active" : ""
                      } btn__title`}
                      onClick={() => handleInstructionsClick(item.id)}
                    >
                      Instructions
                    </Button>

                    <Button
                      outline
                      color="info"
                      className={`${
                        activeTab === `ingredients_${item.id}` ? "active" : ""
                      } mr-3`}
                      onClick={() => handleIngredientsClick(item.id)}
                    >
                      Ingredients
                    </Button>
                  </div>

                  <div className="recipe-container mb-5">
                    <p
                      className="recipe-summary"
                      dangerouslySetInnerHTML={{ __html: item.summary }}
                    ></p>
                    <h5
                      className="recipe-instructions"
                      dangerouslySetInnerHTML={{
                        __html:
                          activeTab === `instructions_${item.id}`
                            ? item.instructions
                            : activeTab === `ingredients_${item.id}`
                            ? item.extendedIngredients
                                .map((ingredient) => ingredient.original)
                                .join("<br>")
                            : "Click on 'Instructions' or 'Ingredients' to view.",
                      }}
                    ></h5>
                  </div>
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
        <BackToTopButton />
      </Container>
    </section>
  );
};

export default BreakfastPage;
