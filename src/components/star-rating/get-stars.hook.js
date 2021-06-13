import { useMemo } from "react"
import { createIntegerArrayFromLength, ratingRoundUp } from "../../utils"

export const useGetStars = (rating, MAX = 5) => {
  const ratingAsNumber = parseFloat(ratingRoundUp(rating))
  const fullStars = Math.min(Math.floor(ratingAsNumber), MAX)
  const hasPartial =
    rating && fullStars < MAX && !Number.isInteger(ratingAsNumber)
  const emptyStars = MAX - (hasPartial ? fullStars + 1 : fullStars)

  return useMemo(
    () => ({
      emptyStarsArray: createIntegerArrayFromLength(emptyStars),
      emptyStars,
      fullStarsArray: createIntegerArrayFromLength(fullStars),
      fullStars,
      hasPartial,
    }),
    [rating]
  )
}
