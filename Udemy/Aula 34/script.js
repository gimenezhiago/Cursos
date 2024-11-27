function meuEscopo() {
    const form = document.querySelector(".form")
    const resultado = document.querySelector(".resultado")

    const pessoa = []
    let x = 0

    form.addEventListener('submit', recebeEventoForm)

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoa[x] = {nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        console.log(pessoa)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}` 
        x++
    }
}
meuEscopo()