// You were camping with your friends far away from home, but when 
// it's time to go back, you realize that you fuel is running out and the nearest pump 
// is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
// Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.
// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, 
// что у вас заканчивается топливо, а ближайший насос находится в 50 милях! Вы знаете, 
// что в среднем ваша машина движется со скоростью около 25 миль на галлон. Осталось 2 галлона. 
// Учитывая эти факторы, напишите функцию, которая сообщает вам, можно ли добраться до насоса или нет. 
// Функция должна возвращать true (1), если это возможно, и false (0), если нет. 
// Входные значения всегда положительны.

// distanceToPump - расстояние до заправки
// mpg - скорость
// fueLeft - остаток топлива в галлонах
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft

// расход 9л/100км едем со средней скоростью 50км/ч
console.log(zeroFuel(50, 25, 2))