const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function getTimeSegunds(seg) {
    const data = new Date(seg * 1000)
    const horario = data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
    return horario
}

let segundos = 0
let timer

document.addEventListener('click', function(event) {
    const elemento = event.target

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
         timer = setInterval(function() {
            segundos++
            relogio.innerHTML = getTimeSegunds(segundos)
        }, 1000)
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        segundos = 0
        relogio.innerHTML = getTimeSegunds(0)    
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
})
