let nomes = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nome = inputAmigo.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (nomes.includes(nome)) {
    alert("Este nome já foi adicionado!");
    return;
  }

  nomes.push(nome);
  inputAmigo.value = "";

  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (const nome of nomes) {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (nomes.length === 0) {
    alert("Por favor, adicione nomes antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * nomes.length);
  const sorteado = nomes[indiceSorteado];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

const limparLista = () => {
  nomes = [];
  atualizarLista();
  document.getElementById("resultado").innerHTML = "";
  alert("Lista de amigos foi limpa!");
};

document.getElementById("amigo").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarAmigo();
  }
});
