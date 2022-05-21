// pessoa —> 123 —> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa —> 456 —> {...}
// pessoa = {nome:'Ana'}  Pessoa é uma Constante

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Raua ABC'

console.log(pessoa.nome)
console.log(pessoa)

