const pilotos =['Vettel', 'Alonso', 'Raikkonen','Massa']
pilotos.pop() // Remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') //
console.log(pilotos)

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2,0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2, 4)
console.log(algunsPilotos2)