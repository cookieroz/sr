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
      <Nav direction="row" background="brand" pad="medium">
        <ReviewsSelect options={filterOptions} onSelectChange={setFilter} />
      </Nav>
      <ReviewsListComponent errorMessage={errorMessage} reviews={reviews} />
    </Box>
  )
}
