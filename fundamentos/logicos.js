function compras (trabalho1, trabalho2) {
    comprarSorvete = trabalho1 || trabalho2
    comprarTv50 = trabalho1 && trabalho2
    comprarTv32 = trabalho1 != trabalho2
    manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))
