import Review from "@/components/review";
import getYamlData from "@/helpers/getYamlData";
import React from "react";

const Reviews = () => {
  const reviewsData = getYamlData("reviews");

  return (
    <>
    {reviewsData && Object.entries(reviewsData).map(([category, data], index) => (
      <div key={index} className="mt-12 grid grid-cols-1 gap-4 sm:mx-8 md:mt-16 lg:mt-20 2xl:mt-24">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          {category}.
        </h1>
        {
          data.reviews.map((review: any, index: React.Key | null | undefined) => (
            <Review key={index} review={review} />
          ))
        }
      </div>
    ))}
    </>
  );
};

export default Reviews;
