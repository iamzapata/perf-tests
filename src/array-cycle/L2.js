import { isInspect, isPerf } from "../utils/isInspect.js"
import { measureRunTime } from "../utils/measureRunTime.js"

export function cycleRight(array) {
  let currentIndex = 0

  function next() {
    return this[++currentIndex % this.length]
  }

  return Object.assign([...array], { next })
}

if (isInspect || isPerf) {
  const array = Array(100)
    .fill(0)
    .map((_, i) => i)

  const cycle = cycleRight(array)

  const count = 10_000_000

  function runCycle() {
    for (let i = 0; i < count; i++) {
      cycle.next()
    }
  }

  measureRunTime(runCycle)
}
