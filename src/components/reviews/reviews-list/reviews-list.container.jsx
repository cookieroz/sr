import React from "react"

import { useReviewsContext } from "../reviews.provider"
import { ReviewsListComponent } from "./reviews-list.component"

export const ReviewsList = () => {
  const { allReviews, errorMessage } = useReviewsContext()

  return (
    <ReviewsListComponent errorMessage={errorMessage} reviews={allReviews} />
  )
}
