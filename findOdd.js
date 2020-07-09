// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// По заданному массиву найдите целое число, которое встречается нечетное количество раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.


function findOdd(arr) {
  //happy coding!
  const set = new Set()

  arr.forEach((elem, _, arr) => {
    const array = arr.filter(e => elem === e)
    set.add(array)
  })

  for (let el of set) {
    if (el.length % 2 !== 0) {
      return el[0]
    }
  }
}

// const findOdd = xs => xs.reduce((a, b) => a ^ b);

// XOR(побитовое исключающее или) ( ^ )

// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
// doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);

const arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]
console.log(findOdd(arr))