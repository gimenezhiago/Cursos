const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso || !altura) {
        setResultado('Input inválido!!!', false)
        return
    }

    const imc = calcularIMC(peso, altura)
    const nivelIMC = IMCResultados(imc)
    
    setResultado(`Seu Imc é ${imc} (${nivelIMC})`, true)
    
})

function criarP() {
    const p = document.createElement('p')

    return p
}

function setResultado(texto, isValid) {
    const res = document.querySelector('#res')
    res.innerHTML = ''
    const p = criarP()

    if(isValid) {
        p.classList.add('res')
    } else {
        p.classList.add('bad')
    }
    
    p.innerHTML = texto
    res.appendChild(p)
}

function calcularIMC(peso, altura) {
    return (peso / altura ** 2).toFixed(2)
}

function IMCResultados(imc) {
    const nivel = [
        'Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'
    ]

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]

    return null
}
