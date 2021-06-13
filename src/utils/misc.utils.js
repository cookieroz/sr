export const createIntegerArrayFromLength = (arrayLength) =>
  Array.from({ length: arrayLength }, (arrayItem, index) => index + 1)

export const formatReviewDate = (reviewDate) => {
  if (!reviewDate) {
    return ""
  }
  const date = new Date(reviewDate)

  return date.toLocaleDateString("en-US")
}

export const ratingRoundUp = (score) =>
  Math.min(Math.ceil(score * 2) / 2, 5).toFixed(1)
