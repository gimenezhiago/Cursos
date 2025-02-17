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