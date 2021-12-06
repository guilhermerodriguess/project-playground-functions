// Desafio 10

function techList(tech,name) {
  let obj = []
  let tech2 = tech.sort()
  if (tech2.length === 0) {
      return 'Vazio!'
  }
  else {
  for (i in tech2) {
      obj.push({
          tech: tech[i],
          name: name
      })
  }
  }
  return obj
}



// Desafio 11
function generatePhoneNumber(numbers) {
  let ddd = []
  let cincoPrimeiros = []
  let quatroUltimos = []
  let numRepetido = 0

  function numberComplete(numbers) {
      for (number in numbers) {  
      
          if (number < 2) {
          ddd.push(numbers[number])
          }
          else if (number < 7) {
          cincoPrimeiros.push(numbers[number])
          }
          else if (number < 11) {
          quatroUltimos.push(numbers[number])
          }
      }
      ddd = ddd.join('')
      cincoPrimeiros = cincoPrimeiros.join('')
      quatroUltimos = quatroUltimos.join('')
  
      let numeroGerado = `(${ddd}) ${cincoPrimeiros}-${quatroUltimos}`
      return numeroGerado
  }
  
  function verificaRepetido(numbers) {
      for (let number of numbers) {
          numRepetido = 0
          for (let number2 in numbers) {
              
              if (number === numbers[number2]) {
                  numRepetido ++
                  if (numRepetido >= 3) {
                      return true
                  }
              }
              
          }
      
      }
  }
  
  function numberCorrect(numbers) {
      for (let number in numbers)
      if (numbers[number] < 0 || numbers[number] > 9) {
          return true 
      }
  }

  if (numbers.length !== 11) {
          return "Array com tamanho incorreto."
  }
  else if (numberCorrect(numbers) === true) {
      return "não é possível gerar um número de telefone com esses valores"
  }
  else if (verificaRepetido(numbers) === true) {
      return "não é possível gerar um número de telefone com esses valores"
  }
  else {
      return numberComplete(numbers)
  }
  
}

numbers = []

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
