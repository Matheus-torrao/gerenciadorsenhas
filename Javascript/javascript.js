// Dados iniciais de senhas (para fins de demonstração)
const senhasSalvas = [
    { site: "example.com", senha: "senhadopreexample" },
    { site: "outrosite.com", senha: "senhadopreoutro" }
];

// Elementos da interface
const passwordListElement = document.getElementById("password-list");
const siteElement = document.getElementById("site");
const senhaElement = document.getElementById("senha");
const salvarElement = document.getElementById("salvar");

// Função para exibir senhas na lista
function exibirSenhas() {
    passwordListElement.innerHTML = "";
    senhasSalvas.forEach((senha, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${senha.site}: ${senha.senha} <button onclick="deletarSenha(${index})">Excluir</button>`;
        passwordListElement.appendChild(listItem);
    });
}

// Função para adicionar uma nova senha
function adicionarSenha() {
    const site = siteElement.value;
    const senha = senhaElement.value;
    
    if (site && senha) {
        senhasSalvas.push({ site, senha });
        siteElement.value = "";
        senhaElement.value = "";
        exibirSenhas();
    }
}

// Função para deletar uma senha
function deletarSenha(index) {
    senhasSalvas.splice(index, 1);
    exibirSenhas();
}

// Evento de clique no botão "Salvar Senha"
salvarElement.addEventListener("click", adicionarSenha);

// Inicializa o aplicativo exibindo as senhas salvas
exibirSenhas();
