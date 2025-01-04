const inputNovaTarefa = document.querySelector('.inputNovaTarefa')
const btnAddTarefa = document.querySelector('.btnAddTarefa')
const tarefas = document.querySelector('.tarefas') //ul

function criaLI() {
    const li = document.createElement('li')
    return li
}

function criaTarefa(txtInput) {
    const li = criaLI()
    li.innerHTML = txtInput
    tarefas.appendChild(li)
    limpaInput()
    apagarTarefa(li)
    salvarTarefas()
}

function limpaInput() {
    inputNovaTarefa.value = ''
    inputNovaTarefa.focus() //coloca foco no input
}

function apagarTarefa(li) {
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = []
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerHTML
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaTarefas.push(tarefaTexto)
    }
    const tarefasJson = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)
    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa)
    }
}

btnAddTarefa.addEventListener('click', () => {
    if (!inputNovaTarefa.value) return alert('Digite uma tarefa!!!')
    criaTarefa(inputNovaTarefa.value)
})

inputNovaTarefa.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        if (!inputNovaTarefa.value) return alert('Digite uma tarefa!!!')
        criaTarefa(inputNovaTarefa.value)
    }
})

document.addEventListener('click', (event) => {
    const elemento = event.target
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }    
})

adicionaTarefasSalvas()