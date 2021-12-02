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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1)
  let cat2Pos = Math.abs(mouse - cat2)

  if (cat1Pos < cat2Pos) {
      return 'cat1'
  }
  else if (cat1Pos === cat2Pos) {
      return 'os gatos trombam e o rato foge'
  }
  else {
      return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let strings = []
  for (i in array) {
      if (array[i]%5 === 0 && array[i]%3 === 0) {
          strings.push('fizzBuzz')
      }
      else if (array[i]%5 === 0) {
          strings.push('buzz')
      }
      else if (array[i]%3 === 0) {
          strings.push('fizz')
      }
      else {
          strings.push('bug!')
      }
  
  }
  return strings
}
array = []

// Desafio 9
function encode(string) {
  let array = []
  for (i in string) {
      if (string[i] === 'a') {
          array.push('1')
      }
      else if (string[i] === 'e') {
          array.push('2')
      }
      else if (string[i] === 'i') {
          array.push('3')
      }
      else if (string[i] === 'o') {
          array.push('4')
      }
      else if (string[i] === 'u') {
          array.push('5')
      }
      else {
          array.push(string[i])
      }
      
  }
  
return array.join('')
}


function decode(string) {
  let array = []
  for (i in string) {
      if (string[i] === '1') {
          array.push('a')
      }
      else if (string[i] === '2') {
          array.push('e')
      }
      else if (string[i] === '3') {
          array.push('i')
      }
      else if (string[i] === '4') {
          array.push('o')
      }
      else if (string[i] === '5') {
          array.push('u')
      }
      else {
          array.push(string[i])
      }
      
  }
  
return array.join('')
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
