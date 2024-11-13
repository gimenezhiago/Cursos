// Para printar no console
console.log("Hello Word!!!")
console.log(123456, 35.85)
console.log('Meu nome é "Hiago". Estou aprendendo JavaScript às', 10, 'da manhã')

// Comentários
//
/* */ 

// Juntar Html e Js
/*<script></script>*/
/*<script src="index.js"></script>*/

// Para alertar
window.alert("Olá Mundo")
alert("Olá Mundo!!!")

// Para confirmar
window.confirm("Deseja realmente apagar?")
confirm("Deseja realmente apagar?")

// Para digitar
window.prompt("Digite seu cpf:")
prompt("Digite seu cpf:")

// Para declarar variável
let nome = "Hiago"
var sobrenome = "Gimenez"
const idade = 16

// Para colocar a variável
console.log("Meu nome é ", nome)

//Descobrir a tipagem
typeof nome

//Contenação
console.log(nome + sobrenome)
console.log(umaString.concat("em "," um lindo dia"))

//Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos`);

//Dados Primitivos
// String: "Hiago"
// Number: 10 10.52
// Undefined: Não tem na memória
// Null: Nulo
// Boolean: True or False

//Operadores Aritméticos
// + = mais
console.log(num1 + num2)
// - = menos
console.log(num1 - num2)
// * = multiplicação
console.log(num1 * num2)
// / = divisão
console.log(num1 / num2)
// ** = potenciação
console.log(num1**2)
// % = resto da divisão inteiro
console.log(num1 % num2)

//Precedencia dos operadores
/* 
    ()
    **
    * / %
    + -
 */

//Incremento e Decremento
num++ //Soma 1
++num //Soma primeiro
num-- //Diminui 1
--num //Diminui primeiro

//Operadores de atribuição
num += 2 //num = num + 2
num *= 2 //num = num * 2
num **=10 // num = num**10

//NaN = Not a Number

//Converte para number
parseInt(variavel) //Somente para inteiros
parseFloat(variavel) //Para números reais
Number(variavel) //Para números reais

//Para mudar o valor das variáveis(sem conflito)
[varA, varB, varC] = [varB, varC, varA]

//Para escapar o caracter 
let umaString = "Um \"texto\"" // a barra invertida é usada como escape

//Pegar um índice da string
umaString[3]
umaString.charAt(8)

//Para saber o índice da string
umaString.indexOf('texto')
umaString.indexOf('o', 4) //depois do índice colocado

//Para saber o índice de trás para frente
umaString.lastIndexOf('m')

//Expressão regular
umaString.match(/[a-z]/g) //somente as letras minúsculas

//Pesquisa o índice
umaString.search(/x/g) //o g significa pegar todos 

//Troca as palavras
umaString.replace('Um', 'Outra')

//Contar a quantidade de caracteres
umaString.length

//Para fatiar a string
umaString.slice(2, 6)
umaString.slice(-3) //negativo menos length
umaString.substring(umaString.length - 5)

//Para dividir uma string
umaString.split(' ')
umaString.split(' ', 2) //acontece o numero de vezes 

//Para maiusculo
umaString.toUpperCase()

//Para minisculo
umaString.toLowerCase()

//Para escrever na tela
window.document.write('Alguma coisa')

//Para escrever no html
window.document.body.innerHTML = 'Qualquer outra coisa <br/>'
document.body.innerHTML += 'Escrever'

//Converter para string
num1.toString()
num1.toString(2) //Binário

//Para colocar as casas decimais
num1.toFixed(2)

//Para ver se é inteiro
Number.isInteger(num1)

//Se é Não é um número
Number.isNaN(temp)






