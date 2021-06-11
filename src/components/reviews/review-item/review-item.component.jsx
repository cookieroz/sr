import React from "react"
import PropTypes from "prop-types"

import { ErrorComponent } from "../../error"
import { StarRating } from "../../star-rating"
import { useFormatReviewDate } from "../hooks"

export const ReviewItemComponent = ({
  author,
  body,
  errorMessage,
  publish_date: publishDate,
  rating,
}) => {
  const reviewDate = useFormatReviewDate(publishDate)
  // {
  // 	"star-rating": 0.8,
  // 	"publish_date": "2016-09-05T23:25:47.642350Z",
  // 	"id": "9783221620868",
  // 	"body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  // 	"author": "Kaley Schiller"
  // },
  return (
    <div>
      <ErrorComponent errorMessage={errorMessage} />
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
  errorMessage: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
