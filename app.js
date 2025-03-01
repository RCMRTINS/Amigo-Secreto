// Array para armazenar os nomes
let amigos = [];
let amigosDisponiveis = []; // Lista de amigos que ainda não foram sorteados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Captura o campo de entrada
    let nomeAmigo = inputAmigo.value.trim(); // Obtém o valor e remove espaços extras

    // Validação: Verifica se o campo não está vazio
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }

    // Impede nomes duplicados
    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);
    amigosDisponiveis.push(nomeAmigo); // Também adiciona à lista de sorteio

    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let li = document.createElement("li"); // Cria um item de lista
        li.textContent = nome; // Define o nome como texto do item
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos sem repetir até que todos sejam sorteados
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado.");
        return;
    }

    if (amigosDisponiveis.length === 0) {
        // Se todos os amigos já foram sorteados, reinicia a lista
        amigosDisponiveis = [...amigos]; 
        alert("Todos os amigos já foram sorteados! Reiniciando a lista...");
    }

    // Sorteia um amigo da lista disponível
    let indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    let sorteado = amigosDisponiveis.splice(indiceSorteado, 1)[0]; // Remove o sorteado da lista disponível

    // Atualiza o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: <strong>${sorteado}</strong>`;
}
