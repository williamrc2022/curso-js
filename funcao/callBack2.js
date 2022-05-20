const notas = [3.7, 5.6, 5.5, 8.9, 9.7, 7.1, 4.3]

//Sem Callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com Callback

const notasBaixas1 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas1)

const notasMaioresQue7 = notas.filter(notas => notas > 7)   //Arrow Function

const notasBaixas3 = notas.filter(notas => notas < 7)  //Arrow Function


console.log(notasBaixas3)
console.log(notasMaioresQue7)

