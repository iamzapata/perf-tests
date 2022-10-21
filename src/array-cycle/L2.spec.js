import { cycleRight } from "./L2"

describe("cycleRight", () => {
  it("cycles through an array of strings", () => {
    const array = cycleRight(["a", "b", "c", "d"])
    expect(array.next()).toBe("b")
    expect(array.next()).toBe("c")
    expect(array.next()).toBe("d")
    expect(array.next()).toBe("a")
    expect(array.next()).toBe("b")
  })

  it("cycles through an array of numbers", () => {
    const array = cycleRight([1, 2, 3])
    expect(array.next()).toBe(2)
    expect(array.next()).toBe(3)
    expect(array.next()).toBe(1)
    expect(array.next()).toBe(2)
  })
})
