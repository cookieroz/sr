import { useMemo } from "react"
import { useParams } from "react-router-dom"

import { useReviewsContext } from "../reviews.provider"

export const useDisplayReview = () => {
  const { allReviews } = useReviewsContext()
  const { id } = useParams()

  return useMemo(() => {
    if (!id) {
      return {}
    }

    return [...allReviews].find((review) => review.id === id)
  }, [allReviews, id])
}
