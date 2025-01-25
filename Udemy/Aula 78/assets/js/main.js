function Calculadora() {
    this.display = document.querySelector('.display')
    
    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', (event) => {
                
            if (event.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.inicia = () => {
        this.clickbtn()
        this.pressionaEnter()
    }

    this.clearDisplay = () => {
        this.display.value = ''
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = () => {
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
    }

    this.clickbtn = () => {
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
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor
        this.display.focus()
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
console.log(calculadora)