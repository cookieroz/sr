import { renderHook } from "@testing-library/react-hooks"

jest.mock("../../../api", () => ({
  get: jest.fn(),
}))

import API from "../../../api"
import { useGetAllReviews } from "./get-all-reviews.hook"

describe("useGetReviews test", () => {
  beforeAll(() => {
    API.get.mockResolvedValue(true)
  })

  it("should display loading as true then false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetAllReviews())

    expect(result.current.isLoading).toEqual(true)

    await waitForNextUpdate()

    expect(result.current.isLoading).toEqual(false)
  })

  it("should call API.get", async () => {
    const { waitForNextUpdate } = renderHook(() => useGetAllReviews())
    await waitForNextUpdate()

    expect(API.get).toHaveBeenCalled()
  })

  it("should have an error message when API.get is rejected", async () => {
    const rejectedMessage = "test reject"
    API.get.mockRejectedValue(rejectedMessage)

    const { result, waitForNextUpdate } = renderHook(() => useGetAllReviews())
    await waitForNextUpdate()

    expect(result.current.errorMessage).toEqual(
      expect.stringContaining(rejectedMessage)
    )
  })
})
