function fatorial(numero){
    if(numero == 0) {
        return 1
    }else {
        return numero * fatorial (numero - 1)
    }
}

console.log(fatorial(10))  // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3.628,800
console.log(fatorial(3))