function getMax(array) {
  let max = array[0]
  for (let i = 1; i < array.length; ++i) {
    if (array[i] > max) {
      max = array[i]
    }
  }

  return max
}

function getMin(array) {
  let min = array[0]
  for (let i = 1; i < array.length; ++i) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}

function timeToProcessOriginal(items, workstations = 0) {
  items = [...items]

  if (workstations === 0)
    return items.reduce((total, item) => total + item.time, 0)

  let availableWorkstations = Array(workstations).fill(0)
  let currentItem = null

  while ((currentItem = items.shift())) {
    const nextWorkstationIndex = availableWorkstations.indexOf(
      Math.min(...availableWorkstations)
    )

    availableWorkstations[nextWorkstationIndex] += currentItem.time
  }

  return Math.max(...availableWorkstations)
}

function timeToProcessOptimized(items, workstations = 0) {
  items = [...items]

  if (workstations === 0)
    return items.reduce((total, item) => total + item.time, 0)

  let availableWorkstations = Array(workstations).fill(0)

  if (workstations > items.length)
    return Math.max(...items.map((item) => item.time))

  let count = items.length
  while (count) {
    const current = items.length - count
    const nextWorkstationIndex = availableWorkstations.indexOf(
      Math.min(...availableWorkstations)
    )
    availableWorkstations[nextWorkstationIndex] += items[current].time
    count--
  }

  return Math.max(...availableWorkstations)
}

function timeToProcessSafe(items, workstations = 0) {
  items = [...items]

  if (workstations === 0)
    return items.reduce((total, item) => total + item.time, 0)

  let availableWorkstations = Array(workstations).fill(0)

  if (workstations > items.length)
    return [...items.map((item) => item.time)].reduce((x, y) => Math.max(x, y))

  let count = items.length
  while (count) {
    const current = items.length - count
    const nextWorkstationIndex = availableWorkstations.indexOf(
      availableWorkstations.reduce((x, y) => Math.min(x, y))
    )
    availableWorkstations[nextWorkstationIndex] += items[current].time
    count--
  }

  return availableWorkstations.reduce((x, y) => Math.max(x, y))
}

const fns = [timeToProcessOriginal, timeToProcessOptimized, timeToProcessSafe]

const timeToProcess = fns[2]

export { timeToProcess }
