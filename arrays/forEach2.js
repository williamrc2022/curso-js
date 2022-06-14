Array.prototype.forEach2 = function(callBack) {
    for (i = 0; i < this.length; i++) {
        callBack(this[i], i , this)
    }
}

const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel'] 
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
