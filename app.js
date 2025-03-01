// Array para armazenar os nomes.
let amigos = [];

// Função para adicionar um amigo à lista.
function adicionarAmigo() {
    let imputAmigo = document.getElementById("amigo"); // captura o campo de entrada.
    let nomeAmigo = imputAmigo.value.trim(); // Obtém o valor, remove espaço extra.
    
    // Validação: Verifica se o campo não está vazio.
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.")
        return;
    }
    
    // Adicionar o nome ao array de amigos.
    amigos.push(nomeAmigo);    
    imputAmigo.value = "";
    imputAmigo.focus();
    atualizarLista();
}

// Função para atualizar a lista exibida na tela.

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // limpa a lista antes de atualizar.

    // Adicionar cada amigo de forma dinâmica.

    amigos.forEach((nome, index) => {
        let li = document.createElement("li"); // cria um item de de lista.
        li.textContent = nome; // define o nome como texto do item.
        listaAmigos.appendChild(li);
    })
    
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Nenhum amigo adicionado");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random())];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;
}