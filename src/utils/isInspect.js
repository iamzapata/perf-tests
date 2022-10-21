const isInspect = process.execArgv.join().includes("--inspect")
const isPerf = process.argv.slice(2).includes("--performance")

export { isInspect, isPerf }
