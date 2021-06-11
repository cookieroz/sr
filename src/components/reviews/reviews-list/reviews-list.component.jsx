import React from "react"
import PropTypes from "prop-types"
import { ReviewCard } from "../review-card"
import { ErrorComponent } from "../../error"

export const ReviewsListComponent = ({ errorMessage, reviews = [] }) => {
  return (
    <div>
      <ErrorComponent errorMessage={errorMessage} />
      {reviews?.length > 0 &&
        reviews.map((review) => <ReviewCard key={review.id} {...review} />)}
    </div>
  )
}

ReviewsListComponent.propTypes = {
  errorMessage: PropTypes.string,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      body: PropTypes.string,
      id: PropTypes.string,
      publishDate: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
}
