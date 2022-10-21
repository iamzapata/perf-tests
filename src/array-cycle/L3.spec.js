import { cycle } from "./L3"

describe("cycle forward", () => {
  it("cycles through an array of strings", () => {
    const array = cycle(["a", "b", "c", "d"])
    expect(array.next()).toBe("b")
    expect(array.next()).toBe("c")
    expect(array.next()).toBe("d")
    expect(array.next()).toBe("a")
    expect(array.next()).toBe("b")
  })

  it("cycles through an array of numbers", () => {
    const array = cycle([1, 2, 3])
    expect(array.next()).toBe(2)
    expect(array.next()).toBe(3)
    expect(array.next()).toBe(1)
    expect(array.next()).toBe(2)
  })

  it("cycles through an array starting at index '2'", () => {
    const array = cycle(["a", "b", "c", "d"], 2)
    expect(array.next()).toBe("d")
    expect(array.next()).toBe("a")
    expect(array.next()).toBe("b")
    expect(array.next()).toBe("c")
  })

  it("cycles through an array starting at index '3'", () => {
    const array = cycle(["a", "b", "c", "d"], 3)
    expect(array.next()).toBe("a")
    expect(array.next()).toBe("b")
    expect(array.next()).toBe("c")
    expect(array.next()).toBe("d")
  })
})

describe("cycle backward", () => {
  it("cycles through an array of strings", () => {
    const array = cycle(["a", "b", "c", "d"])
    expect(array.prev()).toBe("d")
    expect(array.prev()).toBe("c")
    expect(array.prev()).toBe("b")
    expect(array.prev()).toBe("a")
    expect(array.prev()).toBe("d")
  })

  it("cycles through an array of numbers", () => {
    const array = cycle([1, 2, 3])
    expect(array.prev()).toBe(3)
    expect(array.prev()).toBe(2)
    expect(array.prev()).toBe(1)
    expect(array.prev()).toBe(3)
  })

  it("cycles through an array starting at index '2'", () => {
    const array = cycle(["a", "b", "c", "d"], 2)
    expect(array.prev()).toBe("b")
    expect(array.prev()).toBe("a")
    expect(array.prev()).toBe("d")
    expect(array.prev()).toBe("c")
  })
})
