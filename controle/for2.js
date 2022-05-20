const notas = [9.2, 3.4, 7.4, 3.5]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobreNome: 'Silva',
    idade: 29,
    peso: 100
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
