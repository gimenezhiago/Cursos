//exportando módulos
export { nome, sobrenome, idade as age, soma } // Exporta as variáveis e funções para serem usadas em outros módulos
import { nome as name, sobrenome, age, soma } from './modulo1.js' // Importa as variáveis e funções do módulo especificado

export const lindo = 'Sim' // Exporta uma constante chamada lindo
import { lindo } from './modulo1.js' // Importa a constante lindo do módulo especificado

import * as MeuModulo from './modulo1.js' // Importa todas as variáveis e funções do módulo como um objeto
console.log(MeuModulo.nome) // Exibe o valor da variável nome do módulo

export default fazTudo // Exporta a função fazTudo como o export padrão do módulo
import fazTudo from './modulo1'// Importa a função fazTudo do módulo especificado

import fazTudo, { nome as name, sobrenome, idade } from './modulo1.js' // Importa a função fazTudo está em default e as variáveis do módulo especificado