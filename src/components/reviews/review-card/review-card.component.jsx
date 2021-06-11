import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"

import { StarRating } from "../../star-rating"
import { useFormatReviewDate } from "../hooks"

export const ReviewCard = ({
  author,
  id,
  publish_date: publishDate,
  rating,
}) => {
  const history = useHistory()
  const reviewPath = `reviews/${id}`
  const reviewDate = useFormatReviewDate(publishDate)
  const goToReview = () => history.push(reviewPath)

  return (
    <div onClick={goToReview}>
      {rating && <StarRating rating={rating} />}
      {`author: ${author}`}
      {`date: ${reviewDate}`}
    </div>
  )
}

ReviewCard.propTypes = {
  author: PropTypes.string,
  id: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
