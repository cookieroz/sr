import { renderHook } from "@testing-library/react-hooks"

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}))
jest.mock("../reviews.provider")

import { useParams } from "react-router-dom"

import { reviewsMock } from "./mocks"
import { useReviewsContext } from "../reviews.provider"
import { useDisplayReview } from "./display-review.hook"

const firstReview = reviewsMock[0]

describe("useDisplayReview test", () => {
  beforeAll(() => {
    useReviewsContext.mockReturnValue({ allReviews: reviewsMock })
  })

  it("returns empty object when param id is undefined", () => {
    useParams.mockReturnValue({})
    const { result } = renderHook(() => useDisplayReview())

    expect(result.current).toEqual({})
  })

  it("returns firstReview when param id firstReview id", () => {
    useParams.mockReturnValue({ id: firstReview.id })
    const { result } = renderHook(() => useDisplayReview())

    expect(result.current).toEqual(firstReview)
  })
})
