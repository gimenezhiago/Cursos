//Criar um objeto
const obj = { nome: 'hiago' } //chave: valor

//new Object (criar um array com construtor)
const obj1 = new Object({ nome: 'hiago' }) 

//delete (apagar uma chave)
delete obj.nome

//Função no objeto
const obj2 = {
    falar() {
        return 'oi'
    }
}

obj1.falarnome = function() {
    return this.nome
}

//Ver as chaves do objeto
for (let chave in obj) {
    console.log(chave)
}

//Para congelar o objeto
Object.freeze(obj)

//Factory function (função que cria um objeto)
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('hiago', 'gimenez')

//Constructor function (função que cria um objeto)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    }
}
const p2 = new Pessoa('hiago', 'gimenez')
Object.freeze(p2) //congela o objeto, n pode mudar

//Obeject.keys (mostra as chaves)
console.log(Object.keys(p2))

//Object.values (mostra os valores)
console.log(Object.values(p3))

//Object.entries (mostra as chaves e valores)
console.log(Object.entries(p3))

//Object.defineProperty (define uma propriedade)
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //não pode ser alterado
        configurable: true //configurável
    })
}

//Object.defineProperties (define várias propriedades)
function Produto1(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: true
        }
    })
}

//Getter e Setter
function Produto2(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() { //pega o valor
            return estoquePrivado //retorna o valor
        },
        set: function(valor) { //altera o valor
            if (typeof valor !== 'number') {
                throw new TypeError('valor inválido') //se não for número, retorna erro
            }
            estoquePrivado = valor
        }
    })
}
const p3 = new Produto2('camiseta', 20, 3)
p3.estoque = 500 //altera o valor 
console.log(p3)

//Spread (Não é por referência)
const a = { nome: 'hiago' }
const b = { ...a }
b.nome = 'claudio'    
console.log(a) //vai mostrar hiago
console.log(b) //vai mostrar claudio

//Object.assign (copia um objeto)
const c = { nome: 'hiago' } 
const d = Object.assign({}, c, { nome: 'claudio' }) //copia o objeto
console.log(c) //vai mostrar hiago
console.log(d) //vai mostrar claudio

//Object.getOwnPropertyDescriptor (mostra as propriedades)
console.log(Object.getOwnPropertyDescriptor(p3, 'estoque'))

//Object.prototype (cadeia de métodos)
Pessoa.prototype.inicio = 'OIIIII' //cria um __proto__ (método) dentro da função construtora
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

//Object.setPrototypeOf (muda o __proto__)
const objA = { chaveA: 'A' }
const objB = { chaveB: 'B' }
Object.setPrototypeOf(objB, objA) //muda o __proto__ de objB para objA

//Object.getPrototypeOf (mostra o __proto__)
console.log(Object.getPrototypeOf(objB))

//Object.create (cria um objeto com __proto__)
const objC = Object.create(objA, { tamanho:{
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
} }) //cria um objeto com __proto__ de objA

//call()
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
function Carro(nome, preco) {
    Produto.call(this, nome, preco) //chama o construtor de Produto
    this.limpador = function() {
        return 'limpando'
    }
}

//Herança
function Produto3(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto3.prototype.aumento = function(quantia) {
    this.preco += quantia
}
function Camiseta(nome, preco, cor) {
    Produto3.call(this, nome, preco) //chama o construtor de Produto3
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto3.prototype) //herda o __proto__ de Produto3
Camiseta.prototype.constructor = Camiseta //muda o construtor de Camiseta
const camiseta = new Camiseta('regata', 7.5, 'preta')

//Polimorfismo
function Conta(agencia, conta, saldo) { //superclasse
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log('saldo insuficiente')
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function() {
    console.log(`ag/c: ${this.agencia}/${this.conta} | saldo: R$${this.saldo.toFixed(2)}`)
}
const conta = new Conta(11, 22, 10)
conta.depositar(11)
conta.sacar(10)

function ContaCorrente(agencia, conta, saldo, limite) { //subclasse
    Conta.call(this, agencia, conta, saldo) //chama o construtor de Conta
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype) //herda o __proto__ de Conta
ContaCorrente.prototype.constructor = ContaCorrente //muda o construtor de ContaCorrente
ContaCorrente.prototype.sacar = function(valor) {
    if (this.saldo + this.limite < valor) {
        console.log('saldo insuficiente')
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)

function ContaPoupanca(agencia, conta, saldo) { //subclasse
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype) //herda o __proto__ de Conta
ContaPoupanca.prototype.constructor = ContaPoupanca //muda o construtor de ContaPoupanca
const cp = new ContaPoupanca(12, 33, 0)
cp.depositar(10)

