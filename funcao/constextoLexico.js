const valor = 'Global'

function minhaFuncao (){
    const valor = 'Local'
    console.log(valor)
}

function exec (){
    minhaFuncao()
}

exec()