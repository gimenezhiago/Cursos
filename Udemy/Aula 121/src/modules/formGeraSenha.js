import geraSenha from './geradores.js';

const senhaGerada = document.querySelector('.senha-gerada'); 
const qtd = document.querySelector('.quantidade');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default function FormGeraSenha() {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gerar();
    })
}

function gerar() {
    const senha = geraSenha(
        qtd.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada selecionado';
}