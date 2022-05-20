//composto por 3 partes, a primeira expressão que vai retornar verdadeiro ou falso. ? para saber se é V ou F  e : Caso a primeira opção seja V ouF.

const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'

console.log(resultado(7)) // Aprovado
console.log(resultado(6.5)) // Reprovado