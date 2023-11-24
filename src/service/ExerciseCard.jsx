import React from "react";
import "../service/exercise.css";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise }) => {
  return (
    <>
      <Link to={`/exercise/${exercise.muscleGroup.toLowerCase()}`}>
        <div className="exercise__card">
          <img src={exercise.image} alt="" />
          <p>{exercise.muscleGroup}</p>;
        </div>
      </Link>
    </>
  );
};

export default ExerciseCard;
