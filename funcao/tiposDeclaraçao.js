console.log(soma(4,3)) // Função declarada consegue chamar ela antes

// Function declaration

function soma (x, y) {
    return x + y
}

//Function expression

const sub = function (x, y) {
    return x - y
}

console.log(sub (3,4))

//Named Function Expression

let mult = function mult(x, y) {
    return x * y
}