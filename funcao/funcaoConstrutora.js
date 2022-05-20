function Carro(velocidadeMaxima = 200, delta = 5) {

    //Atributo Privado
    let velocidadeAtual = 0
    
    //Método Público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari =  new Carro  (350, 30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof uno)

