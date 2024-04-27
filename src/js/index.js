/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML
    
    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele;

    Passo 2 - Indentificar o clique no botão;

    Passo 3 - Adicionar a classe ativo nos projetos escondidos;

Objetivo 2 - Esconder o botão de mostrar mais
    Passo 1 - Pegar o botão e esconder ele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    MostrarMaisProjetos();
    Esconderbotao();
});

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

function Esconderbotao() {
    botaoMostrarProjetos.classList.add("remover");
}
