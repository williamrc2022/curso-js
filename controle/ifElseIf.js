Number.prototype.entre = function(inicio,fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre (9,10)) {
        console.log('Quadro de honra')
    } else if (nota.entre (7,8.99)) {
        console.log('Aprovado')
    } else if (nota.entre (4,6.99)) {
        console.log('Recuperação')
    }else if (nota.entre(0,3.99)) {
        console.log('Reprovado')
    } else console.log ('Número inválido')
    console.log('fim')
}


imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.5)
imprimirResultado(3.2)
imprimirResultado(11) // Caso coloque numero invalido use Else e Defina Numero inválido.
imprimirResultado(-1)
