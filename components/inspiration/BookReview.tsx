import getMarkdown from "../MarkdownText";
import ReviewStars from "./ReviewStars";

const BookReview = ({ review }: { review: any }) => {
  const bookTitle = review.title;
  const by = `${review.author ? "By " + review.author + " | " : ""}${review.date}`;
  const reviewText = review.review;
  const rating = review.rating;

  return (
    <div>
      <div className="flex justify-between mt-4">
        <h1 className="text-xl font-bold text-black dark:text-white">
          {bookTitle}
        </h1>
        <ReviewStars rating={rating} />
      </div>
      <p className="text-sm text-tertiary-light dark:text-tertiary-dark">
        {by}
      </p>
      <p className="bg-semi-light dark:bg-semi-dark rounded-xl p-4 text-tertiary-light dark:text-tertiary-dark mt-4">
        {getMarkdown({ data: reviewText })}
      </p>
    </div>
  );
};

export default BookReview;
