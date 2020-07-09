// The code provided is supposed return a person's Full Name given their first and last names.
// But it's not working properly.
// Notes
// The first and/or last names are never null (None in Python), but may be empty.
// Task
// Fix the bug so we can all go home early.

// Предполагается, что указанный код возвращает полное имя человека с указанием его имени и фамилии.

// Но это не работает должным образом.

// Заметки
// Имя и / или фамилия никогда не бывают нулевыми (None в Python), но могут быть пустыми.

// задача
// Исправьте ошибку, чтобы мы все могли вернуться домой пораньше.

class Dinglemouse {

  constructor(firstName, lastName) {
    this.firstName = firstName || ''
    this.lastName = lastName || ''
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim()
  }

}

const person = new Dinglemouse()

console.log(new Dinglemouse('Roman').getFullName());