import { FaRegStar, FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
}

const ReviewStars = ({ rating }: RatingProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FaStar
          key={i}
          className="text-contrast-light dark:text-contrast-dark"
        />
      );
    } else {
      stars.push(
        <FaRegStar
          key={i}
          className="text-contrast-light dark:text-contrast-dark"
        />
      );
    }
  }
  return <div className="flex mt-1">{stars}</div>
};

export default ReviewStars;
