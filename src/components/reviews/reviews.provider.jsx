import React, { useContext } from "react"
import { PropTypes } from "prop-types"

import { Spinner } from "../spinner"
import { useGetAllReviews } from "./hooks"

const ReviewsContext = React.createContext({
  allReviews: [],
  errorMessage: null,
})

export const useReviewsContext = () => useContext(ReviewsContext)

export const ReviewsContextProvider = ({ children }) => {
  const { allReviews, errorMessage, isLoading } = useGetAllReviews()

  return (
    <ReviewsContext.Provider value={{ allReviews, errorMessage }}>
      {isLoading ? <Spinner /> : children}
    </ReviewsContext.Provider>
  )
}

ReviewsContextProvider.propTypes = {
  children: PropTypes.any,
}
