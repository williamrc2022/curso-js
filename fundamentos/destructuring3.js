function rand ({min= 0, max =  1000}) {

    const valor = Math.random() *(max - min) +min
    return Math.floor(valor)
}

const obj =  {max: 300 , min: 200}

console.log(rand(obj))
