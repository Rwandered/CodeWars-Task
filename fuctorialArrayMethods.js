// Найти факториал, используя методы массивов
// n! означает n*(n-1)*....3*2*1
// и посчитать сумму

// 100! 9.332622e+157

const fun = (num) => {
  const fact = new Array(num).fill('')
    .map( (e, i) => BigInt(num - i))
    .reduce( (acc, elem) => acc * elem, 1n)

  const sum = [...fact.toString()].reduce( (a, elem) => a + +elem, 0)
  console.log(sum)
}

fun(100)