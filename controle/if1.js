function soBoaNOticia(nota) {
    if (nota >=7) {
        console.log(' Aprovado com ' + nota)
    }
}

soBoaNOticia (8)
soBoaNOticia (2)

function seForVerdadeEuFAlo (valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFAlo()
seForVerdadeEuFAlo(null)
seForVerdadeEuFAlo(undefined)
seForVerdadeEuFAlo(NaN)
seForVerdadeEuFAlo('')
seForVerdadeEuFAlo(0)
seForVerdadeEuFAlo(-1)
seForVerdadeEuFAlo(9)
seForVerdadeEuFAlo('?')
seForVerdadeEuFAlo([])
seForVerdadeEuFAlo(1,2)
seForVerdadeEuFAlo({})