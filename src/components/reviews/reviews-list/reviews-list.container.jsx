import React from "react"
import { Box, Nav } from "grommet"

import { useReviewsContext } from "../reviews.provider"
import { useFilterSortReviews } from "../hooks"
import { ReviewsSelect } from "../reviews-select"
import { ReviewsListComponent } from "./reviews-list.component"

export const ReviewsList = () => {
  const { errorMessage } = useReviewsContext()
  const { filterOptions, reviews, setFilter } = useFilterSortReviews()
  // const { filterOptions, reviews, setFilter, setSort, sortOptions } =
  //   useFilterSortReviews()

  return (
    <Box>
      <ReviewsSelect
        options={filterOptions}
        onSelectChange={setFilter}
        title="Filter By Review Ratings"
      />
      <ReviewsListComponent errorMessage={errorMessage} reviews={reviews} />
    </Box>
  )
}
