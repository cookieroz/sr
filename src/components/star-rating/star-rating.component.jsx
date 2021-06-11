import React from "react"
import PropTypes from "prop-types"
import { Star, StarHalf } from "grommet-icons"
import { Box } from "grommet"

export const StarRating = ({ rating }) => {
  const MAX = 5
  const ratingAsNumber = parseFloat(rating)
  const fullStars = Math.min(Math.floor(ratingAsNumber), MAX)
  const hasPartial =
    rating && fullStars < MAX && !Number.isInteger(ratingAsNumber)
  const emptyStars = MAX - (hasPartial ? fullStars + 1 : fullStars)

  return (
    <Box direction="row" pad="small">
      {Array.from({ length: fullStars }).map((n, index) => (
        <Star key={`star-${n}-${index}`} />
      ))}
      {hasPartial && <StarHalf />}
      {Array.from({ length: emptyStars }).map((n, index) => (
        <Star key={`star-${n}-${index}`} fillOpacity=".2" />
      ))}
    </Box>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number,
}
