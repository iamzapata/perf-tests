import { timeToProcess } from "./L2.js"
import TenThousand from "./L3-10K-items.js"
import HundredThousand from "./L3-100K-items.js"
import { measureRunTime } from "../utils/measureRunTime.js"

function process(items) {
  console.log()
  console.log(
    "\x1b[42m%s\x1b[0m",
    "items to process: ",
    items.length.toLocaleString()
  )
  console.log()

  const fn = () => timeToProcess(items, 100)

  measureRunTime(fn)
}

process([
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
])

const million = [
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
  ...HundredThousand,
]

//process(million)

console.log("EOF")
export {}
