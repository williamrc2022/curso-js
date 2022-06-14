function ValorInverso(valor){
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`

}

console.log(ValorInverso(true))
console.log(ValorInverso(35))
console.log(ValorInverso('String'))