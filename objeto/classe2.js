class Avo {
    constructor(sobrenome, olhos){
        this.sobrenome = 'Costa'
        this.olhos = 'Azuis'
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
const pai = new Pai

console.log(filho)
console.log(pai)