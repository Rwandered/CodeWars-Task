// Получить из массива объектов объект
const transform = (arr) => {
  return arr.reduce( (pr ,elem) => {
    pr[elem.name] = elem.value
    console.log('PR: ',pr)
    return pr
  }, {})
}

const arr = [
  { name: 'name', value: 'Tolya'},
  { name: 'age', value: 40}
]

console.log(transform(arr) )
