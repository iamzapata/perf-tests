import { timeToProcess } from "./L2.js"

const itemsOne = [
  { id: 1, time: 1 },
  { id: 2, time: 3 },
  { id: 3, time: 5 },
  { id: 4, time: 10 },
]

const itemsTwo = [
  { id: 1, time: 2 },
  { id: 2, time: 7 },
  { id: 3, time: 15 },
  { id: 4, time: 2 },
]

describe("timeToProcess", () => {
  ;[
    [itemsOne, 2, 13],
    [itemsOne, 3, 11],
    [itemsTwo, undefined, 26],
    [itemsTwo, 2, 17],
    [itemsTwo, 50, 15],
  ].forEach(([items, workstations, expected]) => {
    it(`Should return  ${expected}, when processing \n${items}\n with ${workstations} workstations.`, () => {
      expect(timeToProcess(items, workstations)).toBe(expected)
    })
  })
})
