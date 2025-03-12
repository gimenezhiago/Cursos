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
