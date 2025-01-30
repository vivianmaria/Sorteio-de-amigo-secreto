🎲 #Sorteio de Amigo Secreto#

Um projeto simples em JavaScript para sortear um amigo secreto. Ideal para praticar lógica de programação e manipulação do DOM.

🚀 #Funcionalidades#

Adicionar Amigos: Insira nomes no campo de entrada e adicione-os à lista.

Sortear Amigo Secreto: Clique em "Sortear" para escolher um nome aleatório da lista.

Limpar Lista: Resete a lista de amigos e o resultado do sorteio com um botão.

🛠️ #Como Usar#

Adicionar Amigos:

Digite o nome no campo de entrada e pressione "Enter" ou clique em "Adicionar".

O nome será exibido na lista de amigos.

#Sortear:#

Clique em "Sortear" para escolher um amigo secreto aleatoriamente.

O nome sorteado será exibido na tela.

#Limpar Lista:#

Clique em "Limpar Lista" para resetar tudo.

📂 #Estrutura do Projeto#

sorteio-amigo-secreto/
├── index.html # Estrutura da aplicação
├── styles.css # Estilos da interface
└── script.js # Lógica do sorteio e manipulação do DOM

💻 #Tecnologias Utilizadas#

HTML: Estrutura da página.

CSS: Estilização da interface.

JavaScript: Lógica do sorteio e interação com o DOM.

📋 #Exemplo de Código#

Aqui está a função que realiza o sorteio:
const sortearAmigo = () => {
if (nomes.length === 0) {
alert("Adicione nomes antes de sortear.");
return;
}
const indiceSorteado = Math.floor(Math.random() \* nomes.length);
const sorteado = nomes[indiceSorteado];
document.getElementById("resultado").innerHTML = `🎉 Sorteado: <strong>${sorteado}</strong>`;
};

📥 #Instalação#

Clone o repositório:
git clone https://github.com/seu-usuario/sorteio-amigo-secreto.git
