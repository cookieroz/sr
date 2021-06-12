export const createIntegerArrayFromLength = (arrayLength) =>
  Array.from({ length: arrayLength }, (arrayItem, index) => index + 1)

export const formatReviewDate = (reviewDate) => {
  if (!reviewDate) {
    return ""
  }
  const date = new Date(reviewDate)

  return date.toLocaleDateString("en-US")
}
