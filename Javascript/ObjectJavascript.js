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

//defineProperty (define uma propriedade)
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

//defineProperties (define várias propriedades)
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


