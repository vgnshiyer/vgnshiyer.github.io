import Review from "@/components/Review";
import getYamlData from "@/helpers/getYamlData";
import React from "react";
import { ReviewData } from "@/types/ReviewData";

const Reviews = () => {
  const reviewsData: ReviewData = getYamlData("reviews") as ReviewData;
  for (let category in reviewsData) {
    reviewsData[category].reviews.sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

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
