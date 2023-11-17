import React from "react";
import "../service/exercise.css";
const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise__card">
      <img src={exercise.image} alt="" />
      <p>{exercise.muscleGroup}</p>;
    </div>
  );
};

export default ExerciseCard;
