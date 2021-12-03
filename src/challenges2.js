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
function generatePhoneNumber() {
  // seu código aqui
}

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
