import React from "react"
import PropTypes from "prop-types"
import { Star, StarHalf } from "grommet-icons"
import { Box } from "grommet"

import { useGetStars } from "./get-stars.hook"

export const StarRating = ({ color = "status-warning", rating }) => {
  const { emptyStarsArray, fullStarsArray, hasPartial } = useGetStars(rating)

  return (
    <Box
      align="center"
      alignContent="center"
      direction="row"
      fill="horizontal"
      justify="start"
      pad="small"
    >
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
  justify: PropTypes.string,
  rating: PropTypes.number,
}
