import { useMemo } from "react"

export const useFormatReviewDate = (reviewDate) => {
  return useMemo(() => {
    const date = new Date(reviewDate)

    return date.toLocaleDateString("en-US")
  }, [reviewDate])
}
