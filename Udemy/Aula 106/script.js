class ValidaCPF {
    constructor (cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            value: cpf.replace(/\D+/g, ''),
            enumerable: true
        })
    } 

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1)
        this.novoCpf = cpfSemDigito + digito1 + digito2
        return this.novoCpf
    }

    static geraDigito(cpfSemDigito) {
        let total = 0
        let reverso = cpfSemDigito.length + 1
        for (let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    valida() {
        if (!this.cpflimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.eSequencia()) return false
        this.geraNovoCpf()
        return this.novoCpf === this.cpfLimpo
    }
}
const cpf1 = new ValidaCPF('070.987.720-03')
if (cpf1.valida()) {
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}