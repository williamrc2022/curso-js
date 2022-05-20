function verificarPalindromo(string) {
    if (!string ) return;

    return string.split("").reverse().join("") === string;
}


console.log(verificarPalindromo("amor")) //false
console.log(verificarPalindromo("gato")) //fase
console.log(verificarPalindromo("dammitimmad")) //true
console.log(verificarPalindromo("subinoonibus")) // true