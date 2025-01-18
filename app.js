//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirNomeDeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    let listaDeNomeAmigos = '';

    for (const amigo of amigos) {
        listaDeNomeAmigos += `<li>${amigo}</li>`;
    }
    listaDeAmigos.innerHTML = listaDeNomeAmigos;
}

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;

    if (nomeAmigo != '') {
        amigos.push(nomeAmigo);
        limparCampo();
        exibirNomeDeAmigos();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let sorteador = Math.floor(Math.random() * amigos.length);
        let indiceAmigoSorteado = amigos[sorteador];
        let resultadoSorteio = document.getElementById("resultado");
        resultadoSorteio.innerHTML = `O amigo secreto sorteado é ${indiceAmigoSorteado}`;
        amigos = [];
        exibirNomeDeAmigos();
    } else {
        alert("Por favor, insira dois nomes de amigos para fazer o sorteio.");
    }
}
