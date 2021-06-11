import React from "react"
import PropTypes from "prop-types"

import { StarRating } from "../../star-rating"
import { useFormatReviewDate } from "../hooks"

export const ReviewItemComponent = ({
  author,
  body,
  publish_date: publishDate,
  rating,
}) => {
  const reviewDate = useFormatReviewDate(publishDate)

  return (
    <div>
      <div>
        <h3>{`${author} rated it: `}</h3>
        <StarRating rating={rating} />
      </div>
      <div>
        <h3>{`Review on ${reviewDate}: `}</h3>
        <p>{body}</p>
      </div>
    </div>
  )
}

ReviewItemComponent.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
