// суть задачи в том, чтобы осортировать массив так - сначала идут четные число по возрастанию, затем нечетные поубыванию
function menFromBoys(arr) {
  //your code here  
  const set = new Set()
  const evenArr = arr.filter(e => +e % 2 === 0).sort((a, b) => a - b)
  const oddArr = arr.filter(e => +e % 2 !== 0).sort((a, b) => b - a);
  [...evenArr, ...oddArr].forEach(e => set.add(e))

  return [...set]
}
const arr = [49, 818, -282, 900, 928, 281, -282, -1]

console.log(menFromBoys(arr));