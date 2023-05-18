const listaBotoes = document.querySelectorAll('[botao]');

listaBotoes.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        mostraLista(evento.target.textContent);
    })
})

function mostraLista(texto) {
    lista = document.querySelector('[lista]');
    if (texto === 'Mostra Aluratintas em estoque') {
        lista.style.display = "block";
    } else if (texto === 'Apaga Aluratintas em estoque') {
        lista.style.display = "none";
    }
}