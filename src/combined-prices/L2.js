export function combinedPrices(productList, targetSum) {
  if (!productList || !productList.length || !targetSum) {
    return []
  }

  const hash = new Map()
  productList.forEach(
    ([product, price]) => price > 0 && hash.set(price, product)
  )

  for (let i = 0; i < productList.length; i++) {
    const currentPrice = productList[i][1]

    if (currentPrice > targetSum) {
      continue
    }

    const diff = targetSum - currentPrice

    if (hash.has(diff)) {
      return [productList[i][0], hash.get(diff)]
    }
  }

  return []
}

export function combinedPricesV1(productList, targetSum) {
  if (!productList || !productList.length || !targetSum) {
    return []
  }

  // filtering the list before hand instead of doing it in the loop
  // is actually faster
  //productList = productList.filter(([, price]) => price > 0)

  //return ImplementationOne(productList, 0, targetSum)
  //return ImplementationTwo(productList, targetSum)
  //return ImplementationThree(productList, targetSum)
  return ImplementationFour(productList, targetSum)
}

function ImplementationOne(productList, nextIndex, targetSum) {
  for (let [product, price] of productList) {
    const restOfProducts = productList.slice(nextIndex++)

    for (let [nextProduct, nextPrice] of restOfProducts) {
      const sum = price + nextPrice

      if (sum === targetSum) {
        return [product, nextProduct]
      }
    }
  }

  return []
}

function ImplementationTwo(productList, targetSum) {
  for (let i = 0; i < productList.length; i++) {
    let nextIndex = i + 1
    const [name, price] = productList[i]

    if (price > targetSum) {
      continue
    }

    for (let j = nextIndex; j < productList.length; j++) {
      const [nextName, nextPrice] = productList[j]

      if (price + nextPrice === targetSum) {
        return [name, nextName]
      }
    }
  }

  return []
}

function ImplementationThree(productList, target) {
  const hash = {}
  productList.forEach(([product, price]) => {
    if (price > 0) {
      hash[price] = product
    }
  })

  for (let i = 0; i < productList.length; i++) {
    const currentPrice = productList[i][1]
    if (currentPrice > target) {
      //continue
    }

    const diff = target - currentPrice

    if (diff in hash) {
      return [productList[i][0], hash[diff]]
    }
  }

  return []
}

function ImplementationFour(productList, target) {
  const hash = new Map()
  productList.forEach(([product, price]) => {
    if (price > 0) {
      hash.set(price, product)
    }
  })

  for (let i = 0; i < productList.length; i++) {
    const currentPrice = productList[i][1]

    if (currentPrice > target) {
      continue
    }

    const diff = target - currentPrice

    if (hash.has(diff)) {
      return [productList[i][0], hash.get(diff)]
    }
  }

  return []
}
