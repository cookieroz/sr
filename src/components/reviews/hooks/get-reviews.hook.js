import { useCallback, useState } from "react"

import API from "../../../api"

export const useGetReviews = () => {
  const [errorMessage, setMessageError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getReviewRequest = useCallback(async (reviewId) => {
    const reviewUrl = reviewId ? `/${reviewId}` : "/"
    setIsLoading(true)
    try {
      const response = await API.get(reviewUrl)
      setMessageError(null)

      return response?.data
    } catch (error) {
      setMessageError(`error encountered: ${error}`)
      setIsLoading(false)
    }
  }, [])

  return { errorMessage, getReviewRequest, isLoading, setIsLoading }
}
