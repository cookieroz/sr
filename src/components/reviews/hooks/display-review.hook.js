import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useGetReviews } from "./get-reviews.hook"

export const useDisplayReview = () => {
  const [review, setReview] = useState({})

  const { errorMessage, getReviewRequest, isLoading, setIsLoading } =
    useGetReviews()
  const { id } = useParams()

  const getReview = useCallback(async (reviewId) => {
    if (!reviewId) {
      return
    }
    const response = await getReviewRequest(reviewId)
    setReview(response)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getReview(id)
  }, [getReview, id])

  return { errorMessage, isLoading, review }
}
