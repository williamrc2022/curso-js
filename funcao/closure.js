// Closure é um escopo criado quando a função é declarada
// Esse escopo  permite a função acessar variáveis externas à função

//contexto Léxico em Ação

let x ='Global'

function fora(){
    const x = 'Vai retornar variável x que está dentro da função fora.'
    function dentro (){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())