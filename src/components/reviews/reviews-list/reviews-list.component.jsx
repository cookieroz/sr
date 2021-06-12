import React from "react"
import PropTypes from "prop-types"
import { Box, Grid } from "grommet"

import { ReviewCard } from "../review-card"
import { ErrorComponent } from "../../error"

export const ReviewsListComponent = ({ errorMessage, reviews = [] }) => (
  <Box pad="small">
    <ErrorComponent errorMessage={errorMessage} />
    <Grid fill="horizontal" gap="small" pad="medium">
      {reviews?.length > 0 &&
        reviews.map((review) => <ReviewCard key={review.id} {...review} />)}
    </Grid>
  </Box>
)

ReviewsListComponent.propTypes = {
  errorMessage: PropTypes.string,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      body: PropTypes.string,
      id: PropTypes.string,
      publishDate: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
}
