//Estratégia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(2), soma1(8), soma1(0, 0, 0))

//Estratégia 2 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(2), soma2(8), soma2(0, 0, 0))

//Valor padrão do es2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(2), soma3(8), soma3(0, 0, 0))




