import './assets/css/style.css'
import GeraCPF from './modules/GeraCPF'

(function() {
    const geraCpf = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = geraCpf.geraNovoCpf()
    console.log(geraCpf.geraNovoCpf())
})()
