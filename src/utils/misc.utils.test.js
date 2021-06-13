import {
  createIntegerArrayFromLength,
  formatReviewDate,
  ratingRoundUp,
} from "./misc.utils"

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

describe("rating is returned rounded up to nearest half", () => {
  it("It should return the number rounded up to half", () => {
    const score = 3.15
    expect(ratingRoundUp(score)).toEqual("3.5")
  })
  it("Whole integer should return the same number", () => {
    const score = 4
    expect(ratingRoundUp(score)).toEqual("4.0")
  })
  it("If number has half, it should return the same number", () => {
    const score = 2.5
    expect(ratingRoundUp(score)).toEqual("2.5")
  })
  it("If number is over half, it should return the nearest integer", () => {
    const score = 3.6
    expect(ratingRoundUp(score)).toEqual("4.0")
  })
  it("Should not return more than 5", () => {
    const score = 5.3
    expect(ratingRoundUp(score)).toEqual("5.0")
  })
})
