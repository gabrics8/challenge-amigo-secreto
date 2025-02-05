// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de input
    const nomeAmigo = inputAmigo.value.trim(); // Valor digitado, sem espaços extras

    // Validações
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (!isNaN(nomeAmigo)) {
        alert("Números não são permitidos como nomes.");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array
    listaAmigos.push(nomeAmigo);

    // Limpa o campo de input
    inputAmigo.value = "";

    // Atualiza a lista de nomes na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos'); // Elemento <ul>
    listaAmigosElemento.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada nome da lista ao <ul>
    listaAmigos.forEach(nome => {
        const li = document.createElement('li'); // Cria um novo <li>
        li.textContent = nome; // Define o texto do <li>
        listaAmigosElemento.appendChild(li); // Adiciona o <li> à <ul>
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    // Sorteia um índice aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado]; // Nome sorteado

    // Exibe o resultado na tela
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>O amigo secreto sorteado é <strong>${amigoSorteado}</strong>!</li>`;

    // Remove o nome sorteado da lista para evitar repetição
    listaAmigos.splice(indiceSorteado, 1);

    // Atualiza a lista de nomes na tela
    atualizarListaAmigos();
}

// Função para detectar a tecla Enter no campo de input
function detectarEnter(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada é o Enter
        adicionarAmigo(); // Chama a função para adicionar o nome
    }
}

// Adiciona o evento de tecla pressionada ao campo de input
document.getElementById('amigo').addEventListener('keydown', detectarEnter);
