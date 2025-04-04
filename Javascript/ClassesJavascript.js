//Class (é uma forma diferente de função construtora)
class Pessoa {
    constructor(nome, sobrenome) { //construtor da classe (parâmetros)
        this.nome = nome
        this.sobrenome = sobrenome
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}
const pessoa1 = new Pessoa('Luiz', 'Otávio') //cria um objeto com a classe Pessoa

//Symbol()
const _velocidade = Symbol('velocidade') //cria um simbolo (variável privada)

//Getters e Setters (métodos especiais para manipular propriedades)
class Carro {
    constructor(nome) {
        this.nome = nome
        this._velocidade = 0
    }
    set velocidade(valor) { //método setter para atribuir valor a variável privada  
        if(typeof valor !== 'number') return //verifica se o valor é um número
        if(valor >= 100) return //verifica se o valor é maior que 100
        if(valor <= 0) return //verifica se o valor é menor que 0
        this._velocidade = valor //atribui o valor a variável privada
    }
    get velocidade() { //método getter para acessar a variável privada
        return this._velocidade //retorna a velocidade (variável privada)
    }
    acelerar() {
        if(this._velocidade >= 100) return
        this._velocidade++
    }
    freiar() {
        if(this._velocidade <= 0) return
        this._velocidade--
    }
}
const c1 = new Carro('Fusca')
c1.velocidade = 2000 //não altera a velocidade, pois é privada
