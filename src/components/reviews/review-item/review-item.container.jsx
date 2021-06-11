import React from "react"

import { useDisplayReview } from "../hooks"
import { ReviewItemComponent } from "./review-item.component"
import { Spinner } from "../../spinner"

export const ReviewItem = () => {
  const review = useDisplayReview()

  return review?.id ? <ReviewItemComponent {...review} /> : <Spinner />
}
