//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
//Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
//desconsidere também dias decorridos desde o último aniversário.

function ConverterAnosEmDias (anos) {
    const dias = 365 * anos
    return dias
}
console.log(ConverterAnosEmDias(30))
console.log(ConverterAnosEmDias(50))