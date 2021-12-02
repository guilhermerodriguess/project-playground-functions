// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true
  }
  else {
    return false
  }
}
p1 = true
p2 = true

// Desafio 2
function calcArea(base, height) {
  let result = (base*height)/2
  return result
}
let base = 10
let height = 50

// Desafio 3
function splitSentence(string) {
  let array = []
  return string.split(' ')
}
string = ''

// Desafio 4
function concatName(array) {
  let result = array[array.length - 1]+', '+array[0]
  return result
}
array = []

// Desafio 5
function footballPoints(wins, ties) {
  result = (wins*3) + ties
  return result
}
wins = 0
ties = 0

// Desafio 6
function highestCount(array) {
  let big = 0
  let result = 0
  for (i in array) {
      if (array[i] > big || big === 0) {
          big = array[i]
      }
  }
  for (i in array) {
      if (big === array[i]) {
          result += 1
      }
  }
  return result
}

array = []

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
