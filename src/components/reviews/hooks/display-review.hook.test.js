import { renderHook } from "@testing-library/react-hooks"

jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "9783221620868" }),
}))
jest.mock("../reviews.provider")

import { useReviewsContext } from "../reviews.provider"
import { useDisplayReview } from "./display-review.hook"

const reviewsMock = [
  {
    rating: 0.8,
    publish_date: "2016-09-05T23:25:47.642350Z",
    id: "9783221620868",
    body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "Kaley Schiller",
  },
  {
    rating: 3.2,
    publish_date: "2016-09-04T23:25:47.642388Z",
    id: "9793364045824",
    body: "Can one desire too much of a good thing?.",
    author: "Fay Lemke",
  },
  {
    rating: 4.1,
    publish_date: "2016-09-03T23:25:47.642545Z",
    id: "9784620626604",
    body: "How bitter a thing it is to look into happiness through another man's eyes!",
    author: "Tatyana Olson",
  },
]
const firstReview = reviewsMock[0]

describe("useDisplayReview test", () => {
  let hook

  beforeAll(() => {
    useReviewsContext.mockReturnValue({ allReviews: reviewsMock })
    hook = renderHook(() => useDisplayReview())
  })

  it("returns firstReview when param id firstReview id", () => {
    const { result } = hook

    expect(result.current).toEqual(firstReview)
  })
})
