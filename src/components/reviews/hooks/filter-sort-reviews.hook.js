import { useCallback, useEffect, useState } from "react"

import { useReviewsContext } from "../reviews.provider"

export const useFilterSortReviews = () => {
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
      console.log("setting this up", allReviews)
      setReviews([...allReviews])
    }
  }, [allReviews, ratingFilter])

  return { filterOptions, reviews, setFilter }
}

// export const useFilterSortReviews = () => {
//   const { allReviews } = useReviewsContext()
//
//   const [reviews, setReviews] = useState([...allReviews])
//   const [ratingFilter, setRatingFilter] = useState(null)
//   const [sortBy, setSortBy] = useState(null)
//   const [sortDirection, setSortDirection] = useState(null)
//
//   const sortByTypes = ["publish_date", "rating"]
//   const buildSortOptionsObjects = () => {
//     let sortingOptions = []
//     sortByTypes.forEach((sortType) => {
//       const labelType = sortType === "publish_date" ? "date" : sortType
//       sortingOptions.push({
//         sortBy: sortType,
//         sortDirection: "asc",
//         label: `${labelType} asc`,
//       })
//       sortingOptions.push({
//         sortBy: sortType,
//         sortDirection: "desc",
//         label: `${labelType} desc`,
//       })
//     })
//     return sortingOptions
//   }
//   const getOptionValues = (options) =>
//     [...options]?.map((filter) => filter.label)
//   const findOption = (optionValue, options) =>
//     options?.find((option) => option.label === optionValue)
//
//   const filterValues = [1, 2, 3, 4, 5]
//   const filterOptionObjects = [...filterValues].map((filter) => ({
//     label: `${filter} star`,
//     rating: filter,
//   }))
//   const filterOptionsValues = getOptionValues(filterOptionObjects)
//   const filterOptions = [null, ...filterOptionsValues]
//
//   // const sortByTypes = ["publish_date", "rating"]
//   const sortOptionsObjects = buildSortOptionsObjects()
//   const sortOptionsValues = getOptionValues(sortOptionsObjects)
//   const sortOptions = [null, ...sortOptionsValues]
//   // const sortOptionsObjects = [
//   //   { sortBy: "publish_date", sortDirection: "asc", label: "date asc" },
//   //   { sortBy: "publish_date", sortDirection: "desc", label: "date desc" },
//   //   { sortBy: "rating", sortDirection: "asc", label: "rating asc" },
//   //   { sortBy: "rating", sortDirection: "desc", label: "rating desc" },
//   // ]
//
//   const getItemToSort = useCallback(
//     (reviewItem, isDateSort) =>
//       isDateSort ? new Date(reviewItem) : reviewItem,
//     []
//   )
//   // const sortAscending = useCallback((reviewA, reviewB) => reviewA - reviewB, [])
//   // const sortDescending = useCallback(
//   //   (reviewA, reviewB) => reviewB - reviewA,
//   //   []
//   // )
//
//   const sortAllReviews = useCallback(
//     ({ sortBy, sortDirection }) => {
//       if (!sortBy || !sortDirection) {
//         !sortBy && setSortBy(null)
//         !sortDirection && setSortDirection(null)
//         return reviews
//       }
//       const isDateSort = sortBy === "publish_date"
//       const isDescending = sortDirection === "desc"
//       let sortedReviews = reviews?.length > 0 ? [...reviews] : [...allReviews]
//       console.log("isDescending", isDescending)
//       console.log("isDateSort", isDateSort)
//       console.log("reviews", reviews)
//
//       sortedReviews = sortedReviews.sort((reviewA, reviewB) => {
//         const reviewItemA = getItemToSort(reviewA[sortBy], isDateSort)
//         const reviewItemB = getItemToSort(reviewB[sortBy], isDateSort)
//         return isDescending
//           ? reviewItemA - reviewItemB
//           : reviewItemB - reviewItemA
//       })
//       console.log("sortedReviews", sortedReviews)
//
//       setReviews(sortedReviews)
//     },
//     [allReviews, reviews]
//   )
//
//   const filterReviews = useCallback(
//     (ratingFilter) => {
//       if (!ratingFilter) {
//         setRatingFilter(null)
//         return reviews
//       }
//       const ratingFilterInt = parseInt(ratingFilter)
//       let filteredReviews = [...allReviews]
//       filteredReviews = filteredReviews.filter((review) => {
//         const reviewRating = Math.ceil(review.rating)
//         return reviewRating === ratingFilterInt
//       })
//
//       setReviews(filteredReviews)
//     },
//     [allReviews, ratingFilter, reviews]
//   )
//
//   const setFilter = useCallback(
//     (filterValue) => {
//       console.log("filterValue.value", filterValue.value)
//       const filterOption = findOption(filterValue?.value, filterOptionObjects)
//       console.log("filterOption", filterOption)
//       console.log("filterOptionObjects", filterOptionObjects)
//       setRatingFilter(filterOption?.rating)
//       filterReviews(filterOption?.rating)
//     },
//     [filterReviews]
//   )
//
//   const setSort = useCallback((sortValue) => {
//     console.log("sortValue.value", sortValue.value)
//     console.log("sortOptionsObjects", sortOptionsObjects)
//     const sortOption = findOption(sortValue.value, sortOptionsObjects)
//     // const { sortBy, sortDirection } = sortOption | {}
//     console.log("sortOption", sortOption)
//     setSortBy(sortOption.sortBy)
//     setSortDirection(sortOption.sortDirection)
//     sortAllReviews(sortOption)
//   }, [])
//
//   // useEffect(() => sortAllReviews(), [sortAllReviews])
//   // useEffect(() => filterReviews(), [filterReviews])
//   useEffect(() => {
//     if (!ratingFilter && !sortBy && !sortDirection) {
//       console.log("setting this up", allReviews)
//       setReviews([...allReviews])
//     }
//   }, [allReviews, ratingFilter, sortBy, sortDirection])
//
//   return { filterOptions, reviews, setFilter, setSort, sortOptions }
// }
