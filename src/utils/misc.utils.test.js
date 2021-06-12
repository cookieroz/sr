import { createIntegerArrayFromLength, formatReviewDate } from "./misc.utils"

describe("createIntegerArrayFromLength test", () => {
  it("returns empty array when nothing is passed", () => {
    expect(createIntegerArrayFromLength()).toEqual([])
  })
  it("returns an array with the same length as the value passed", () => {
    const arrayLength = 12
    const intArray = createIntegerArrayFromLength(arrayLength)

    expect(intArray.length).toEqual(arrayLength)
  })
  it("returns an array of integers", () => {
    const arrayLength = 2
    expect(createIntegerArrayFromLength(arrayLength)).toEqual([1, 2])
  })
})

describe("formatReviewDate test", () => {
  it("returns empty array when nothing is passed", () => {
    expect(formatReviewDate()).toEqual("")
  })
  it("returns formatted date", () => {
    expect(formatReviewDate("2022-02-22T23:25:47.642350Z")).toEqual("2/22/2022")
  })
})
