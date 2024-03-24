import React from "react"
import { FaStar, FaRegStar } from "react-icons/fa";

const Review = ({ review }: {review: any}) => {
  const bookTitle = review.title;
  const lineTwo = `${review.author ? 'By ' + review.author + ' | ' : ''}${review.date}`
  const stars = [];
  for(let i = 0; i < 5; i++) {
    if (i < review.rating)
      stars.push(<FaStar key={i} className="text-contrast-light dark:text-contrast-dark" />);
    else
      stars.push(<FaRegStar key={i} className="text-contrast-light dark:text-contrast-dark" />);
  }


  return (
    <div>
      <div className="flex justify-between mt-4">
        <h1 className="text-xl font-bold text-black dark:text-white">{bookTitle}</h1>
        <div className="flex mt-1">{stars}</div>
      </div>
      <p className="text-sm text-tertiary-light dark:text-tertiary-dark">{lineTwo}</p>
      
      <p className="bg-semi-light dark:bg-semi-dark rounded-xl p-4 text-tertiary-light dark:text-tertiary-dark mt-4">{review.review}</p>
    </div>
  )
}

export default Review;