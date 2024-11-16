import React from "react";
import getYamlData from "@/helpers/getYamlData";
import { InspirationData } from "@/types/InspirationData";
import PageTitle from "@/components/PageTitle";
import BookReview from "@/components/inspiration/BookReview";
import Quote from "@/components/inspiration/Quote";
import Podcast from "@/components/inspiration/Podcast";

const Inspiration = () => {
  const categories: InspirationData = getYamlData(
    "inspiration"
  ) as InspirationData;

  for (let category in categories) {
    if (categories.hasOwnProperty(category)) {
      categories[category].inspirations.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
    }
  }

  return (
    <>
      <div className="sm:mx-8 md:mt-10 mb-[-20px] items-center justify-center">
        <q className="text-contrast-light dark:text-contrast-dark italic">
          This page is a collection—curated for myself as reminders along the way.
        </q>
      </div>
      {categories &&
        Object.entries(categories).map(([category, data], index) => (
          <div
            key={index}
            className="mt-14 grid grid-cols-1 gap-4 sm:mx-8 lg:mt-16 2xl:mt-18"
          >
            <PageTitle title={`${category}.`} />
            {data.inspirations.map(
              (inspiration: any, index: React.Key | null | undefined) => {
                if (category === "Books") {
                  return <BookReview key={index} review={inspiration} />;
                } else if (category === "Quotes") {
                  return <Quote key={index} quote={inspiration} />;
                } else if (category === "Podcasts") {
                  return <Podcast key={index} podcast={inspiration} />;
                } else {
                  return null;
                }
              }
            )}
          </div>
        ))
      }
    </>
  );
};

export default Inspiration;
