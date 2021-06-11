import React from "react"
import PropTypes from "prop-types"
import { Star, StarHalf } from "grommet-icons"
import { Box } from "grommet"

import { useGetStars } from "./get-stars.hook"

export const StarRating = ({ color = "accent-4", rating }) => {
  const { emptyStarsArray, fullStarsArray, hasPartial } = useGetStars(rating)

  return (
    <Box direction="row" pad="small">
      {[...fullStarsArray].map((n) => (
        <Star key={`star-${n}`} color={color} />
      ))}
      {hasPartial && <StarHalf color={color} />}
      {[...emptyStarsArray].map((n) => (
        <Star key={`star-${n}`} color={color} fillOpacity=".2" />
      ))}
    </Box>
  )
}

StarRating.propTypes = {
  color: PropTypes.string,
  rating: PropTypes.number,
}
