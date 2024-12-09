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