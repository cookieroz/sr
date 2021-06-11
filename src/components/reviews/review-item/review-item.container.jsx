import React from "react"

import { useDisplayReview } from "../hooks/display-review.hook"
import { ReviewItemComponent } from "./review-item.component"
import { Spinner } from "../../spinner"

export const ReviewItem = () => {
  const { errorMessage, isLoading, review } = useDisplayReview()

  return isLoading ? (
    <Spinner />
  ) : (
    <ReviewItemComponent errorMessage={errorMessage} {...review} />
  )
}
