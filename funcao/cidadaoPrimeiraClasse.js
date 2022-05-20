//Função em JS ´s First-Class Object (Citizens)
//Higher-order  function

//criar de forma literal
function fun1 ()  {  }

//Armazenar em uma variável
const fun2 = function() { }

//Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](5,6))

//Armazenar em um atributo de obj

const obj = { }
obj.falar = function() {return "olá mundo!"}

console.log(obj.falar())

//Como passar uma função como parametros

function run (fun) {
    fun()
}
run (function () {console.log('Executando...')})

//uma função pode retornar/ Conter outra função

function soma (a,b) {
    return function (c) {
        console.log(-a + b + c)
    }
}

soma(5,3) (8)

const oitoMais = soma (5,3)
soma(8)