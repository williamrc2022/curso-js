// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (capitalinicial, taxaDeJuros, tempo){
    return capitalinicial * (1 + taxaDeJuros * tempo)

}
function jurosComposto (capitalinicial, taxaDeJuros, tempo) {
    return capitalinicial *(1 + taxaDeJuros) ** tempo
}

console.log(jurosSimples(500, 14/100, 3))
console.log(jurosComposto(500, 14/100, 3))