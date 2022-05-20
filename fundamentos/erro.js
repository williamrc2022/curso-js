function tratarErroELancar(erro) {
    //throw new Error('Nossa equipe está trabalhando para resolver!') 
    //throw 10
    //throw true
    throw 'Erro de sistema, tente novamente em alguns minutos'      //Definindo msg de Erro.
    // throw {
    //     nome: erro.name,
    //     msg: erro, message,
    //     date: new Date
    // }

}

function imprimirNomeGritado(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }     // Erro no "nome"
imprimirNomeGritado(obj)