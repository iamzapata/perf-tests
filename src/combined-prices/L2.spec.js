import { combinedPrices } from "./L2.js"

export const productListOne = [
  ["shoes", 100],
  ["socks", 50],
  ["pants", 200],
  ["shirts", 80],
  ["hats", 150],
  ["sweaters", 90],
]

export const productListTwo = [
  ["heels", 240],
  ["polo", 300],
  ["shoes", 100],
  ["socks", 50],
  ["pants", 200],
  ["shirts", 80],
  ["hats", 150],
  ["windbreaker", -60],
  ["beanie", 0],
  ["sweaters", 90],
  ["jacket", 130],
]

describe("combinedPrices", () => {
  ;[
    [productListOne, 130, ["socks", "shirts"]],
    [productListTwo, 240, ["hats", "sweaters"]],
    [productListTwo, 220, ["sweaters", "jacket"]],
    [productListTwo, undefined, []],
    [[], 240, []],
    [undefined, 240, []],
    [{}, 240, []],
    [productListTwo, 1000, []],
  ].forEach(([products, targetPrice, result]) => {
    it(`returns [${result}] for \n[${products?.toString()}]\n and ${targetPrice}`, () => {
      expect(combinedPrices(products, targetPrice)).toEqual(result)
    })
  })
})
