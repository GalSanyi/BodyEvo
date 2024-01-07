import React from "react";
import { useParams } from "react-router-dom";
import { fitnessJourneys } from "../utils/success";
const SuccesSroriesDitails = () => {
  const { name } = useParams();
  const selectedStory = fitnessJourneys.find((item) => item.name === name);

  if (!selectedStory) {
    return <h1>Story not found</h1>;
  }

  return (
    <div>
      <p>{selectedStory.description}</p>
    </div>
  );
};

export default SuccesSroriesDitails;
