function soma (){
    let soma = 0
    for(i in arguments){
        soma += arguments [i]
    }
    return soma
}

console.log(soma(30))
console.log(soma())
console.log(soma(" Vai concatenar com soma que é 0"))
