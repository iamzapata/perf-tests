import { combinedPrices } from "./L2.js"
import ThirtyThousand from "./L2-products-30_000.js"
import SixtyThousand from "./L2-products-60_000.js"
import { measureRunTime } from "../utils/measureRunTime.js"

const productList = [
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

function transformProducts(products, suffix = "") {
  return products.map(([product, price]) => [
    `${product}-${suffix}`,
    price * 100 * Math.random(),
  ])
}

// generate an array of XYZ letter combinations
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function getRandomToken() {
  return Math.random().toString(36).slice(2, len)
}

function generatedList() {
  const prefix = getRandomToken(5)

  const list = []
  for (let letter of letters.split("")) {
    for (let subletter of letters.split("").slice(letters.indexOf(letter))) {
      list.push(transformProducts(productList, prefix + letter + subletter))
    }
  }

  return list.flat()
}

const list = [
  /* ...generatedList(),
  ...generatedList(),
  ...generatedList(), */
  ...productList,
]

function process(list) {
  console.log()
  console.log("\x1b[42m%s\x1b[0m", "items to process: ", list.length)
  console.log()

  const fn = () => combinedPrices(list, 100)

  measureRunTime(fn)
}

process(SixtyThousand)

export {}
