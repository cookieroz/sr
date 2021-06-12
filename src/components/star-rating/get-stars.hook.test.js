import { renderHook } from "@testing-library/react-hooks"

import { useGetStars } from "./get-stars.hook"

describe("useGetStars test", () => {
  let hook
  const getHook = (rating, maxStarCount) => {
    return renderHook(() => useGetStars(rating, maxStarCount))
  }

  describe("when nothing is passed", () => {
    beforeAll(() => {
      hook = getHook()
    })

    it("returns empty array for emptyStarsArray", () => {
      const { emptyStarsArray } = hook?.result?.current

      expect(emptyStarsArray).toEqual([])
    })
    it("returns empty array for fullStarsArray", () => {
      const { fullStarsArray } = hook?.result?.current

      expect(fullStarsArray).toEqual([])
    })
    it("returns hasPartial as false", () => {
      const { hasPartial } = hook?.result?.current

      expect(hasPartial).toBeUndefined()
    })
  })

  describe("when should have half star", () => {
    const halfStarRating = 3.3

    beforeAll(() => {
      hook = getHook(halfStarRating)
    })

    it("should return emptyStarsArray with 1 item", () => {
      const { emptyStarsArray } = hook?.result?.current

      expect(emptyStarsArray).toEqual([1])
    })
    it("should return fullStarsArray with 3 items", () => {
      const { fullStarsArray } = hook?.result?.current

      expect(fullStarsArray).toEqual([1, 2, 3])
    })
    it("returns hasPartial as true", () => {
      const { hasPartial } = hook?.result?.current

      expect(hasPartial).toEqual(true)
    })
  })

  describe("when should have no half star", () => {
    const rating = 2

    beforeAll(() => {
      hook = getHook(rating)
    })

    it("should return emptyStarsArray with 1 item", () => {
      const { emptyStarsArray } = hook?.result?.current

      expect(emptyStarsArray).toEqual([1, 2, 3])
    })
    it("should return fullStarsArray with 3 items", () => {
      const { fullStarsArray } = hook?.result?.current

      expect(fullStarsArray).toEqual([1, 2])
    })
    it("returns hasPartial as true", () => {
      const { hasPartial } = hook?.result?.current

      expect(hasPartial).toEqual(false)
    })
  })

  describe("when should have no empty stars", () => {
    const max = 4

    beforeAll(() => {
      hook = getHook(max, max)
    })

    it("should return emptyStarsArray with 1 item", () => {
      const { emptyStarsArray } = hook?.result?.current

      expect(emptyStarsArray).toEqual([])
    })
    it("should return fullStarsArray with 3 items", () => {
      const { fullStarsArray } = hook?.result?.current

      expect(fullStarsArray).toEqual([1, 2, 3, 4])
    })
    it("returns hasPartial as true", () => {
      const { hasPartial } = hook?.result?.current

      expect(hasPartial).toEqual(false)
    })
  })
})
