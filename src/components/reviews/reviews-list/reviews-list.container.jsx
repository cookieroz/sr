import React from "react"
import { Box } from "grommet"

import { useReviewsContext } from "../reviews.provider"
import { useFilterReviews } from "../hooks"
import { ReviewsSelect } from "../reviews-select"
import { ReviewsListComponent } from "./reviews-list.component"

export const ReviewsList = () => {
  const { errorMessage } = useReviewsContext()
  const { filterOptions, reviews, setFilter } = useFilterReviews()

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
