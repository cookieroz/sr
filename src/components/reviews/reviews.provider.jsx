import React, { useState, useContext, useCallback, useEffect } from "react"
import { PropTypes } from "prop-types"

import { Spinner } from "../spinner"
import { useGetReviews } from "./hooks"

const ReviewsContext = React.createContext({
  allReviews: [],
  errorMessage: null,
  isLoading: false,
})

export const useReviewsContext = () => useContext(ReviewsContext)

export const ReviewsContextProvider = ({ children }) => {
  const { errorMessage, getReviewRequest, isLoading, setIsLoading } =
    useGetReviews()

  const [allReviews, setAllReviews] = useState([])

  const getAllReviews = useCallback(async (reviewId) => {
    if (allReviews?.length > 1) {
      return
    }

    const response = await getReviewRequest(reviewId)
    console.log("response", response)
    setAllReviews(response)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getAllReviews()
  }, [])

  const value = {
    allReviews,
    errorMessage,
    // isLoading,
  }
  // return (
  //   <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  // )
  return (
    <ReviewsContext.Provider value={value}>
      {isLoading ? <Spinner /> : children}
    </ReviewsContext.Provider>
  )
}

ReviewsContextProvider.propTypes = {
  children: PropTypes.any,
}
