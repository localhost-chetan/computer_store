import { FaStar, FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

type ReviewType = {
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};

type StarRatingType = {
  reviews: Array<ReviewType>;
  size: number;
  iconColor: string;
  showReviewCount: boolean;
};

const StarRating = ({
  reviews,
  iconColor,
  size,
  showReviewCount,
}: StarRatingType) => {
  if (reviews) {
    const avgRating = Number(
      (
        reviews?.reduce(
          (accumulator, currentValue) => accumulator + currentValue.rating,
          0,
        ) / reviews?.length
      ).toFixed(1),
    );

    const ratingStar = Array.from({ length: 5 }, (_, index) => {
      let number = index + 0.5;

      return (
        <div className={``} key={index}>
          {avgRating >= index + 1 ? (
            <FaStar size={size} color={iconColor} />
          ) : avgRating >= number ? (
            <FaStarHalfAlt size={size} color={iconColor} />
          ) : (
            <FaRegStar size={size} color={iconColor} />
          )}
        </div>
      );
    });

    console.log(ratingStar);

    return (
      <>
        <div className={`flex items-center`}>
          <span className={`flex`}>{ratingStar}</span>
          <span className={`ml-1 font-bold text-gray-600 dark:text-slate-300`}>
            {avgRating}
          </span>
          {showReviewCount && (
            <span className={`ml-2`}>({reviews?.length} customer reviews)</span>
          )}
        </div>
      </>
    );
  }

  return <h1>No reviews yet</h1>;
};

export default StarRating;
