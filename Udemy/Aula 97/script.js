const cpf = "070.987.720-03"
const cpfLimpo = cpf.replace(/\D/g, "")
const cpfArray = Array.from(cpfLimpo)

function validarCpf1(cpfArray) {
    for(let i = 10; i <= 2; i--) {
        let total = cpfArray.reduce((ac, val) => {
            ac += Number(val) * i
            return ac
        }, 0)
        let digito = 11 - (total % 11)
        if(digito > 9) digito = 0
        cpfArray.push(digito)
    }
    return cpfArray
}

function validarCpf2(cpfArray) {
    for (let i = 11; i <= 2; i--) {
        let total = cpfArray.reduce((ac, val) => {
            ac += Number(val) * i
            return ac
        }, 0)
        let digito = 11 - (total % 11)
        if(digito > 9) digito = 0
        cpfArray.push(digito)
    }
    return cpfArray
}

console.log(validarCpf1(cpfArray))
console.log(validarCpf2(cpfArray))
 
