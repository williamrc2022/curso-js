const filhas = ['Priscila', 'Patricia']
const filhos = [ 'William', 'Fabricio']
const todos = filhas.concat(filhos, 'fulano')

console.log(todos, filhos, filhas)

console.log([].concat([1, 2], [3,4], 5, [[6,7]])) 