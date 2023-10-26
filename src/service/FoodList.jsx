import React from "react";
import { Col } from "reactstrap";
import breakfast from "../assets/images/breakfast.png";
import snack from "../assets/images/snack.png";
import lunch from "../assets/images/lunch-2.png";
import dinner from "../assets/images/serving-dish.png";
import FoodCard from "./FoodCard";

const seviceFoods = [
  {
    imgUrl: breakfast,
    title: "Breakfast",
  },
  {
    imgUrl: snack,
    title: "Snack",
  },
  {
    imgUrl: lunch,
    title: "Lunch",
  },
  {
    imgUrl: dinner,
    title: "Dinner",
  },
];

const FoodList = () => {
  return (
    <>
      {seviceFoods.map((item, index) => (
        <Col lg="3" md="6" key={index} className="mb-4">
          <FoodCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default FoodList;
