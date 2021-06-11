import React from "react"

import { Spinner } from "../../spinner"
import { useDisplayAllReviews } from "../hooks/display-all-reviews.hook"
import { ReviewsListComponent } from "./reviews-list.component"

export const ReviewsList = () => {
  const { allReviews, errorMessage, isLoading } = useDisplayAllReviews()

  return isLoading ? (
    <Spinner />
  ) : (
    <ReviewsListComponent errorMessage={errorMessage} reviews={allReviews} />
  )
}
