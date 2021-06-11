import { useCallback, useEffect, useMemo, useState } from "react"

import { useGetReviews } from "./get-reviews.hook"

export const useDisplayAllReviews = () => {
  const [allReviews, setAllReviews] = useState([])
  // const [errorMessage, setMessageError] = useState(null);
  // const [ratingFilter, setRatingFilter] = useState();
  // const [sortBy, setSortBy] = useState("star-rating");
  // const [sortDirection, setSortDirection] = useState("desc");
  const { errorMessage, getReviewRequest, isLoading, setIsLoading } =
    useGetReviews()

  const getAllReviews = useCallback(async (reviewId) => {
    const response = await getReviewRequest(reviewId)
    console.log("response", response)
    setAllReviews(response)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getAllReviews()
  }, [])

  // const onSortReviews = useCallback((sortType, direction) => {
  // 	try {
  // 		const response = await getReviewRequest(reviewId) || [];
  // 		setAllReviews(response);
  // 		setMessageError(null)
  // 	} catch (error) {
  // 		setMessageError(`an error occurred getting this review: ${error}`);
  // 	}
  // }, []);
  //
  // const getAllReviews = useCallback(async (reviewId) => {
  // 	try {
  // 		const response = await getReviewRequest(reviewId) || [];
  // 		setAllReviews(response);
  // 		setMessageError(null)
  // 	} catch (error) {
  // 		setMessageError(`an error occurred getting this review: ${error}`);
  // 	}
  // }, []);

  return { allReviews, errorMessage, isLoading }
}
