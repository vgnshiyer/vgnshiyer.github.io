import ReviewStars from "./ReviewStars";

const Podcast = ({ podcast }: { podcast: any }) => {
  const title = podcast.title;
  const date = podcast.date;
  const rating = podcast.rating;
  const review = podcast.review;

  return (
    <div>
      <div className="flex justify-between mt-4">
        <h1 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h1>
        <ReviewStars rating={rating} />
      </div>
      <p className="text-sm text-tertiary-light dark:text-tertiary-dark">
        {date}
      </p>
      <p className="bg-semi-light dark:bg-semi-dark rounded-xl p-4 text-tertiary-light dark:text-tertiary-dark mt-4">
        {review}
      </p>
    </div>
  )
};

export default Podcast;