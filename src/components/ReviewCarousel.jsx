import { reviews } from "../Data"
import { useState } from "react";

export default function ReviewCarousel() {
    const [moveItems, setMoveItems] = useState(0);

    const ReviewItem = (rev, index) => {
        const locatedIndex = ((index + moveItems)%3 + 3)%3;
        return (
          <div className={`review-item rev-${locatedIndex}`} key={index}>
            <div className="review-text">
              <p>{rev.review}</p>
            </div>
            <div className="review-details">
              <h4>{rev.name}</h4>
              <p>{rev.company}</p>
            </div>
          </div>
        );
    };

    const moveReviews = (direction) => {
      const adder = direction === 'right' ? 1 : -1;
      setMoveItems((moveItems + adder)%3);
    }

  return (
    <>
        <div className="review-carousel" id="reviews">
            {reviews.map((rev, index) => (
                ReviewItem(rev, index)
            ))}
        </div>
        <div className="control-reviews">
            <button id="move-left" onClick={() => moveReviews('left')}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <button id="move-right" onClick={() => moveReviews('right')}>
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    </>
  )
}
