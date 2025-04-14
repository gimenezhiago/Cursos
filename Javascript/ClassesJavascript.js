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

//Herança com classes (extends)
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() { 
        if(this.ligado) return
        this.ligado = true
    }
    desligar() {
        if(!this.ligado) return
        this.ligado = false
    }
}
class Smartphone extends DispositivoEletronico { //herda da classe DispositivoEletronico
    constructor(nome, cor) {
        super(nome) //chama o construtor da classe pai (DispositivoEletronico)
        this.cor = cor
    }
}

//super() (chama o construtor da classe pai)
super(nome) //chama o construtor da classe pai (DispositivoEletronico)

//Métodos estáticos (não podem ser chamados por instâncias)
class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    static soma(a, b) { //método estático (não pode ser chamado por instâncias)
        return a + b 
    }
    aumentarVolume() { //método de instância (pode ser chamado por instâncias)
        this.volume += 2
    }
}
const controle = new ControleRemoto('LG')
controle.aumentarVolume() //aumenta o volume
controle.volume //retorna o volume
ControleRemoto.soma(2, 5) //chama o método estático (não pode ser chamado por instâncias)

//Métodos de instância (podem ser chamados por instâncias)
const controle2 = new ControleRemoto('Smasung')
controle.aumentarVolume() //esta função pode ser chamada por instâncias



