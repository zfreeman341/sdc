import React from "react";
import ReviewListItem from "./ReviewListItem.js";
import ReviewListHeader from "./ReviewListHeader.js";

const ReviewList = ({ reviews }) => {
  return (
    <div className="">
      <ReviewListHeader reviews={reviews} />
      {reviews.map((review) => (
        <ReviewListItem key={review.summary} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
