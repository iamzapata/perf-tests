const fs = require("fs")
const path = require("path")

;[
  ["L3-10K-items.ts", 10_000],
  ["L3-100K-items.ts", 100_000],
  ["L3-1M-items.ts", 1_000_000],
].forEach(([fileName, numberOfItems]) => {
  const filePath = path.join(__dirname, fileName)

  const fileContent = `const Data = ${JSON.stringify(
    [...Array(numberOfItems)].map((_, id) => ({
      id,
      time: Math.round(Math.random())
        ? Math.round(Math.random() * 10)
        : Math.round(Math.random() * 1000),
    }))
  )}; export default Data;`
  console.log("\x1b[32m%s\x1b[0m", "writing file: ", filePath)
  fs.writeFileSync(filePath, fileContent)
})
