const data = new Date();

const day = data.getDay();
const dayh = getDiaSemana(day)
const dia1 = data.getDate();
const mes1 = data.getMonth() + 1;
const mes1h = getMes(mes1)
const ano1 = data.getFullYear();
const horass1 = zeroEsquerda(data.getHours());
const minuto1 = zeroEsquerda(data.getMinutes());


function getDiaSemana(diaSemana) {
    let diaSemanaTexto
    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta'
        return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado'
        return diaSemanaTexto
        default:
            diaSemanaTexto = ''
        return diaSemanaTexto
    }
}

function getMes(mes) {
    let mesTexto
    switch(mes) {
        case 1:
            mesTexto = 'Janeiro'
            return mesTexto
        case 2:
            mesTexto = 'Fevereiro'
            return mesTexto
        case 3:
            mesTexto = 'Março'
            return mesTexto
        case 4:
            mesTexto = 'Abril'
            return mesTexto
        case 5:
            mesTexto = 'Maio'
        return mesTexto
        case 6:
            mesTexto = 'Junho'
        return mesTexto
        case 7:
            mesTexto = 'Julho'
            return mesTexto
        case 8:
            mesTexto = 'Agosto'
            return mesTexto
        case 9:
            mesTexto = 'Setembro'
            return mesTexto
        case 10:
            mesTexto = 'Outubro'
            return mesTexto
        case 11:
            mesTexto = 'Novembro'
            return mesTexto  
        case 12:
            mesTexto = 'Dezembro'
            return mesTexto          
        default:
            mesTexto = ''
        return mesTexto
    }
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

const h1 = document.createElement('h1')
const section = document.querySelector('section')
section.appendChild(h1)
h1.innerHTML =`${dayh}, ${dia1} de ${mes1h} de ${ano1} ${horass1}:${minuto1}`