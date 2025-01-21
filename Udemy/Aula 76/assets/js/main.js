function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.clickbtn()
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', function(event) {
                
                if (event.keyCode === 'Enter') {
                    this.realizaConta()
                }
            }.bind(this))
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta Inválida')
                    return
                }

                this.display.value = String(conta)
            } catch (error) {
                alert('Conta Inválida')
                return
            }
        },

        clickbtn() {
            document.addEventListener('click', function(event) {
                const elemento = event.target
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText)
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()