import getYamlData from "@/helpers/getYamlData";
import React from "react";

const Reviews = () => {
  const reviewsData = getYamlData("reviews");

  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
};

export default Reviews;
