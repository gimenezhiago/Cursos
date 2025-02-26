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

