import { useCallback, useEffect, useState } from "react"

import API from "../../../api"

export const useGetAllReviews = () => {
  const [errorMessage, setMessageError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [allReviews, setAllReviews] = useState([])

  const getReviewsRequest = useCallback(async () => {
    if (allReviews?.length > 1) {
      return allReviews
    }
    setIsLoading(true)

    try {
      const response = await API.get("/")
      setMessageError(null)
      setIsLoading(false)

      return response?.data
    } catch (error) {
      setMessageError(`error encountered: ${error}`)
      setIsLoading(false)
    }
  }, [allReviews])

  useEffect(() => {
    getReviewsRequest().then((response) => {
      setAllReviews(response)
    })
    return () => {
      setIsLoading(false)
    }
  }, [])

  return { allReviews, errorMessage, isLoading }
}
