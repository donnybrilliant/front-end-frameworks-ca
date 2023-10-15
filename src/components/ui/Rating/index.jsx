import { Star, StarWrapper, FilledStar, PartialStarWrapper } from "./styled";

// Component to display the rating with stars
const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const partialFill = (rating - filledStars) * 100; // gets the decimal part as a percentage
  const emptyStars = 5 - filledStars - (partialFill > 0 ? 1 : 0);

  return (
    <>
      {rating > 0 ? (
        <StarWrapper>
          {[...Array(filledStars)].map((_, i) => (
            <Star key={i} className="fas fa-star" $filled></Star>
          ))}
          {partialFill > 0 && (
            <PartialStarWrapper>
              <FilledStar
                className="fas fa-star"
                $percentage={partialFill}
              ></FilledStar>
              <Star className="fas fa-star"></Star>
            </PartialStarWrapper>
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <Star key={i} className="fas fa-star"></Star>
          ))}
        </StarWrapper>
      ) : (
        <StarWrapper>No rating yet</StarWrapper>
      )}
    </>
  );
};

export default Rating;
