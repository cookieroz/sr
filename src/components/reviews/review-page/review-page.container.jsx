import React from "react"

import { useDisplayReview } from "../hooks"
import { ReviewPageComponent } from "./review-page.component"
import { Spinner } from "../../spinner"

export const ReviewItem = () => {
  const review = useDisplayReview()

  return review?.id ? <ReviewPageComponent {...review} /> : <Spinner />
}
