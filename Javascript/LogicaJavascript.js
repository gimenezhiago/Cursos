//Operadores de comparação
/* > Maior que */
/* >= Maior que ou igual a */
/* < Menor que */
/* <= Menor que ou igual a */
/* == Igualdade(valor) */
/* === Igualdade estrita(valor e tipo) */
/* != Diferente(valor) */
/* !== Diferente estrito(valor e tipo) */

//Operadores lógicos
/* && AND/E (Todas as expressões precisam ser verdadeiras) */ 
/* || OR/OU (Não precisa todas serem verdadeiras) */
/* ! NOT/NÃO (Inverte a expressão)*/

//Valores falsy
/* 
false
0
' ' " " ` `
null / undefined
NaN
*/

//Exemplo de falsy
console.log("hiago" && undefined && 'Luana') //Saída é o falsy
console.log("hiago" && 'Luana') //Como não tem nenhum falso retorna o último
console.log(null || 'preto') //No || retorna o primeiro verdadeiro
console.log(0 || null || false) //Como não tem nenhuma verdadeira retorna o último

//If (SE)
const hora = 10
if (hora < 12) {
    console.log('Bom dia!!!')
}

//Else If (SENÃO SE)
const horas = 11
if (horas >= 0 && horas <= 11) {
    console.log('Bom dia!!!')
} else if(horas >= 12 && horas <= 17 ) {
    console.log('Boa Tarde!!!')
} else if(horas >= 18 && horas <= 23) {
    console.log('Boa noite!!!')
}

//Else (SENÃO)
const hr = 11
if (hr >= 0 && hr <= 11) {
    console.log('Bom dia!!!')
} else if(hr >= 12 && hr <= 17 ) {
    console.log('Boa Tarde!!!')
} else if(hr >= 18 && hr <= 23) {
    console.log('Boa noite!!!')
} else {
    console.log('Horário Inválido')
}

//Função para criar alguma tag
const p = document.createElement('p')

//Para colocar alguma tag como filha de outra
res.appendChild(p) //Pai - Filho

//Para dar uma classe à tag
p.classList.add('res')

//Target uma referência ao objeto que envia o evento 
event.target.querySelector('#peso') //No caso está pegando a tag input

//Operador ternário
const pontuacao = 999
const nivel = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal' // condição ? verdadeiro : falso

//Objeto Date
const data = new Date() //chamar a função construtora
const data0 = new Date(0) // seria 01/01/1970 Timestamp unix, o número é em milisegundos
const dataAtual = new Date(2024, 11, 16, 8, 20, 0) //a, m, d, h, M, s, ms, o mês começa do 0
const dataAtual2 = new Date('2024-12-16 08:20:00')
const dia = data.getDate() //o data vem da primeira constante
const mes = data.getMonth()
const ano = data.getFullYear()
const horass = data.getHours()
const minuto = data.getMinutes()
const segundo = data.getSeconds()
const milisegundo = data.getMilliseconds()
const diaSemana = data.getDay()
const milisegundoAgora = Date.now() //pega os milisegundos de agora

//Formata data
function formataData(data) {
    const dia1 = data.getDate()
    const mes1 = data.getMonth() + 1
    const ano1 = data.getFullYear()
    const horass1 = data.getHours()
    const minuto1 = data.getMinutes()
    const segundo1 = data.getSeconds()
    return `${dia1}/${mes1}/${ano1} ${horass1}/${minuto1}/${segundo1}`
}
const data2 = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)

//Como pegar horário padrão seguindo documentação
const datinha = new Date()      //Segunda-feira, 17 de dezembro, 09:20
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'}))

//Switch/Case
switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break
    case 1:
        diaSemanaTexto = 'Segunda'
        break
    case 2:
        diaSemanaTexto = 'Terça'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
    break
    case 5:
        diaSemanaTexto = 'Sexta'
    break
    case 6:
        diaSemanaTexto = 'Sábado'
    break
    default:
        diaSemanaTexto = ''
    break
}

//Diferença entre let e var
//Let tem escopo de bloco { ... bloco }
//Var só tem escopo de função (global)

//Atribuição via desestruturação(arrays)
const numeros = [1000, 2000, 3000, 4000, 5000] // ...(rest) ou ...(spread)
const [primeiroNum, segundoNum, ... resto] = numeros //resto seria o resto do array
const [um, , tres, , cinco] = numeros //esta pulando os valores

const numerosArrays = [ [1, 2, 3], [4, 5, 6] ]
const [ , [ , , seis]] = seis //6
