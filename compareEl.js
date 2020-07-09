// Complete the solution so that it returns true 
// if the first argument(string) passed in ends with the 2nd argument (also a string).

// const solution = (str, ending) => ending.length === 0 ? true : str.slice(-ending.length) === ending

const solution = (str, ending) => str.endsWith(ending)

console.log(solution('asdasdasfgddasdsdfg', ''));

// Expected solution('abc', '') to return true - Expected: true, instead got: false