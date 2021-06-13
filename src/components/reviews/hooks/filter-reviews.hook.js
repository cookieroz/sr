import { useCallback, useEffect, useState } from "react"

import { useReviewsContext } from "../reviews.provider"

export const useFilterReviews = () => {
  const { allReviews } = useReviewsContext()

  const [reviews, setReviews] = useState([...allReviews])
  const [ratingFilter, setRatingFilter] = useState(null)

  const getOptionValues = (options) =>
    [...options]?.map((filter) => filter.label)
  const findOption = (optionValue, options) =>
    options?.find((option) => option.label === optionValue)

  const filterValues = [1, 2, 3, 4, 5]
  const filterOptionObjects = [...filterValues].map((filter) => ({
    label: `${filter} star`,
    rating: filter,
  }))
  const filterOptionsValues = getOptionValues(filterOptionObjects)
  const filterOptions = [null, ...filterOptionsValues]

  const filterReviews = useCallback(
    (ratingFilter) => {
      if (!ratingFilter) {
        setRatingFilter(null)
        return reviews
      }
      const ratingFilterInt = parseInt(ratingFilter)
      let filteredReviews = [...allReviews]
      filteredReviews = filteredReviews.filter((review) => {
        const reviewRating = review.rating < 1 ? 1 : Math.floor(review.rating)
        return reviewRating === ratingFilterInt
      })

      setReviews(filteredReviews)
    },
    [allReviews, ratingFilter, reviews]
  )

  const setFilter = useCallback(
    (filterValue) => {
      const filterOption = findOption(filterValue?.value, filterOptionObjects)
      setRatingFilter(filterOption?.rating)
      filterReviews(filterOption?.rating)
    },
    [filterReviews]
  )

  useEffect(() => {
    if (!ratingFilter) {
      setReviews([...allReviews])
    }
  }, [allReviews, ratingFilter])

  return { filterOptions, reviews, setFilter }
}
