export function measureRunTime(fn) {
  const start = performance.now()

  fn()

  const end = performance.now()

  console.info("Execution time: %dms", end - start)
}
