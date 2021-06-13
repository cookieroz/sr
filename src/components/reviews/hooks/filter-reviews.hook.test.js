import { renderHook } from "@testing-library/react-hooks"

jest.mock("../reviews.provider")

import { useReviewsContext } from "../reviews.provider"
import { reviewsMock } from "./mocks"
import { useFilterReviews } from "./filter-reviews.hook"

describe("useFilterSortReviews test", () => {
  const filterOptionsMock = [
    null,
    "1 star",
    "2 star",
    "3 star",
    "4 star",
    "5 star",
  ]
  let hook

  beforeAll(() => {
    useReviewsContext.mockReturnValue({ allReviews: reviewsMock })

    hook = renderHook(() => useFilterReviews())
  })

  it("displays correct filterOptions", () => {
    const { filterOptions } = hook.result.current
    // const { filterOptions, reviews, setFilter } = hook.result.current

    expect(filterOptions).toEqual(filterOptionsMock)
  })
  it("displays reviewsMock as reviews on default", () => {
    const { reviews } = hook.result.current

    expect(reviews).toEqual(reviewsMock)
  })
})
