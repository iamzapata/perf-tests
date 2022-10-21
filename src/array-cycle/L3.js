export function cycle(array, currentIndex = 0) {
  if (!array[currentIndex])
    throw Error(`Index '${currentIndex}' is out of bounds`)

  function next() {
    currentIndex = (this.length + currentIndex + 1) % this.length
    return this[currentIndex]
  }

  function prev() {
    currentIndex = (this.length + currentIndex - 1) % this.length
    return this[currentIndex]
  }

  const arrayWithNext = Object.assign([...array], {
    next,
    prev,
  })

  return arrayWithNext
}
