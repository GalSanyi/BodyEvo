import React from "react";
import "../style/foods.css";
import { Container, Row, Col, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLunch } from "../utils/fetchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import noFood from "../assets/images/no-food.jpg";
const BreakfastPage = () => {
  const [popular, setPopular] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchData = async () => {
      const check = localStorage.getItem("lunchPopular");
      if (check) {
        setPopular(JSON.parse(check));
      } else {
        try {
          const recipes = await getLunch();
          localStorage.setItem("lunchPopular", JSON.stringify(recipes));
          setPopular(recipes);
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
        }
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

        <Row>
          {popular &&
            popular.map((item) => (
              <React.Fragment key={item.id}>
                <Col lg="6">
                  <div className="breakfast__card">
                    <h4 className="breakfast__title mb-4">{item.title}</h4>
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = { noFood };
                      }}
                    />
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
                    <h5
                      className="recipe-summary"
                      dangerouslySetInnerHTML={{ __html: item.summary }}
                    ></h5>
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
            ))}
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
      </Container>
    </section>
  );
};

export default BreakfastPage;
